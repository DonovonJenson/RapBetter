handleFileInput() {
    var file = document.getElementById('file-upload').files[0];
    var reader = new FileReader();
    var context = new(window.AudioContext || window.webkitAudioContext)();
    reader.onload = function() {
      context.decodeAudioData(reader.result, function(buffer) {
        prepare(buffer);
      });
    };
    reader.readAsArrayBuffer(file);

    function prepare(buffer) {
      var offlineContext = new OfflineAudioContext(1, buffer.length, buffer.sampleRate);
      var source = offlineContext.createBufferSource();
      source.buffer = buffer;
      var filter = offlineContext.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 140;
      source.connect(filter);
      filter.connect(offlineContext.destination);
      source.start(0);
      offlineContext.startRendering();
      offlineContext.oncomplete = function(e) {
        process(e);
      };
    }

    function process(e) {
      var filteredBuffer = e.renderedBuffer;
      //If you want to analyze both channels, use the other channel later
      var data = filteredBuffer.getChannelData(0);
      var max = arrayMax(data);
      var min = arrayMin(data);
      var threshold = min + (max - min) * 0.98;
      var peaks = getPeaksAtThreshold(data, threshold);
      var intervalCounts = countIntervalsBetweenNearbyPeaks(peaks);
      var tempoCounts = groupNeighborsByTempo(intervalCounts);
      tempoCounts.sort(function(a, b) {
        return b.count - a.count;
      });
      if (tempoCounts.length) {

        let totalCounts = 0;
        let totalBeats = 0;
        tempoCounts.forEach(range => {
          totalCounts += range.count;
          totalBeats += range.tempo * range.count;
        });
        let estimatedTempo = totalBeats / totalCounts;

        console.log('estimated tempo', Math.ceil(estimatedTempo));

      }
    }

    // http://tech.beatport.com/2014/web-audio/beat-detection-using-web-audio/
    function getPeaksAtThreshold(data, threshold) {
      var peaksArray = [];
      var length = data.length;
      for (var i = 0; i < length;) {
        if (data[i] > threshold) {
          peaksArray.push(i);
          // Skip forward ~ 1/4s to get past this peak.
          i += 10000;
        }
        i++;
      }
      return peaksArray;
    }

    function countIntervalsBetweenNearbyPeaks(peaks) {
      var intervalCounts = [];
      peaks.forEach(function(peak, index) {
        for (var i = 0; i < 10; i++) {
          var interval = peaks[index + i] - peak;
          var foundInterval = intervalCounts.some(function(intervalCount) {
            if (intervalCount.interval === interval) return intervalCount.count++;
          });
          //Additional checks to avoid infinite loops in later processing
          if (!isNaN(interval) && interval !== 0 && !foundInterval) {
            intervalCounts.push({
              interval: interval,
              count: 1
            });
          }
        }
      });
      return intervalCounts;
    }

    function groupNeighborsByTempo(intervalCounts) {
      var tempoCounts = [];
      intervalCounts.forEach(function(intervalCount) {
        //Convert an interval to tempo
        var theoreticalTempo = 60 / (intervalCount.interval / 44100);
        theoreticalTempo = Math.round(theoreticalTempo);
        if (theoreticalTempo === 0) {
          return;
        }
        // Adjust the tempo to fit within the 90-180 BPM range
        while (theoreticalTempo < 90) theoreticalTempo *= 2;
        while (theoreticalTempo > 180) theoreticalTempo /= 2;

        var foundTempo = tempoCounts.some(function(tempoCount) {
          if (tempoCount.tempo === theoreticalTempo) return tempoCount.count += intervalCount.count;
        });
        if (!foundTempo) {
          tempoCounts.push({
            tempo: theoreticalTempo,
            count: intervalCount.count
          });
        }
      });
      return tempoCounts;
    }

    // http://stackoverflow.com/questions/1669190/javascript-min-max-array-values
    function arrayMin(arr) {
      var len = arr.length,
        min = Infinity;
      while (len--) {
        if (arr[len] < min) {
          min = arr[len];
        }
      }
      return min;
    }

    function arrayMax(arr) {
      var len = arr.length,
        max = -Infinity;
      while (len--) {
        if (arr[len] > max) {
          max = arr[len];
        }
      }
      return max;
    }
  }