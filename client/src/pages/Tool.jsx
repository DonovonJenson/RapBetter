import React from 'react';

export default class Tool extends React.Component {
  constructor(props) {
    super(props);
    this.handleFileInput = this.handleFileInput.bind(this);
  }


  handleFileInput() {

    function getClip(length, startTime, data) {

      console.log('data in getClip: ', data);

      var clip_length = length * 44100;
      var section = startTime * 44100;
      var newArr = [];
      for (var i = 0; i < clip_length; i++) {
        newArr.push(data[section + i]);
      }
      return newArr;
    }

    function getSampleClip(data, samples) {
      var newArray = [];
      var modulus_coefficient = Math.round(data.length / samples);

      for (var i = 0; i < data.length; i++) {
        if (i % modulus_coefficient == 0) {
          newArray.push(data[i]);
        }
      }
      return newArray;
    }

    function normalizeArray(data) {
      var newArray = [];
      for (var i = 0; i < data.length; i++) {
        newArray.push(Math.abs(Math.round((data[i + 1] - data[i]) * 1000)));
      }
      return newArray;
    }


    function countFlatLineGroupings(data) {

      var groupings = 0;
      var newArray = normalizeArray(data);

      function getMax(a) {
        var m = -Infinity,
            i = 0,
            n = a.length;
        for (; i != n; ++i) {
          if (a[i] > m) {
            m = a[i];
          }
        }
        return m;
      }

      function getMin(a) {
        var m = Infinity,
            i = 0,
            n = a.length;

        for (; i != n; ++i) {
          if (a[i] < m) {
            m = a[i];
          }
        }
        return m;
      }
      var max = getMax(newArray);
      var min = getMin(newArray);
      var count = 0;
      var threshold = Math.round((max - min) * 0.2);
      for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] > threshold && newArray[i + 1] < threshold && newArray[i + 2] < threshold && newArray[i + 3] < threshold && newArray[i + 6] < threshold) {
          count++;
        }
      }
      return count;
    }



    // Create a file reader
    let fileReader = new FileReader();
    // grab the input file
    let inputFile = document.getElementById('file-upload').files[0];

    /*

      At this point, we can do some checking for the file extensions

      If it is an mp3, we have an audio file and we don't have to do any extra steps
      If it is an mp4, we will have to extract the audio from the video file (if that's even possible)

    */
    fileReader.onload = e => {
      console.log('result of the file read: ', e.target.result);

      // create an audioContext
      var audioContext = new AudioContext();

      // create an offline audioContext take the result of reading the file, passing in (Channels, Length in bytes, Sample Rate)
      var offlineContext = new OfflineAudioContext(1, e.target.result.byteLength, 44100);
      var source = offlineContext.createBufferSource();

      audioContext.decodeAudioData(e.target.result, function(buffer) {

        // create an original buffer reference to the get channel data
        var originalBuffer = buffer.getChannelData(0);
        var source = offlineContext.createBufferSource();
        source.buffer = buffer;

        // Create a Low Pass Filter to Isolate Low End Beat
        var filter = offlineContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 100;
        source.connect(filter);
        filter.connect(offlineContext.destination);

        // Schedule start at time 0
        source.start(0);

        offlineContext.startRendering().then(function(lowPassAudioBuffer){

          var audioContext = new(window.AudioContext || window.webkitAudioContext)(); 
          var song = audioContext.createBufferSource(); 
          song.buffer = lowPassAudioBuffer;
          song.connect(audioContext.destination);

          let lowPassBuffer = song.buffer.getChannelData(0);
          let lowPassFilter = getClip(10, 10, lowPassBuffer);
          lowPassBuffer = getSampleClip(lowPassFilter, 300);
          lowPassBuffer = normalizeArray(lowPassBuffer);
          var final_tempo = countFlatLineGroupings(lowPassBuffer);

          console.log(final_tempo * 6);

        });


      }, (err) => {console.log(err)} );

    };
    fileReader.readAsArrayBuffer(inputFile);
  }

  render() {

    return (

      <div id="tool-page" className="page">

        <input id="file-upload" type="file" onInput={this.handleFileInput}/>

      </div>

    );

  }

}

/*

  Main purpose:

    To be able to type in a keyword, and practice rhymes off of that keyword timed to a beat.

  How the tool worked before:

    - User would enter in a word to practice
    - When you started the song, the play button would play along with the timer on the tool

  How I envision the tool working:

    WORDS TO RHYME

    - User has a select set of keywords they can pull from.
      + List could be generated from the most frequently searched workds

        This would allow for us to build small services to practice building scalable applications off of
    - User has an input to enter in their own keyword they want to practices


    TOOL MUSIC

    - User has the ability to add music from common music services, or directly upload their own MP3/4's? (see if this is possible)

      We would have to analyze the BPM of the music they upload in order to set the proper intervals for the beats to show up.  This is a very challenging set of circumstances because we have to be able to handle the file uploads, and then analyze BPM which I've no idea where to even start.

    - Have a preset library of music the user can pull from.  In order to avoid any of the copyright challenges though, we woud have to look for music that has no license or anything.

    We will allow users to upload either mp3 or mp4 files, and to get the video from youtube videos

      USER UPLOADS FILE

        Convert the file into an array buffer



*/















































