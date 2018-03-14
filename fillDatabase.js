var fs = require('fs'),
    es = require('event-stream'),
    os = require('os');

var s = fs.createReadStream('./words.txt')
    .pipe(es.split())
    .pipe(es.mapSync(function(line) {
        //pause the readstream
        s.pause();
        console.log("line:", line);
        s.resume();
    })
    .on('error', function(err) {
        console.log('Error:', err);
    })
    .on('end', function() {
        console.log('Finish reading.');
    })
);