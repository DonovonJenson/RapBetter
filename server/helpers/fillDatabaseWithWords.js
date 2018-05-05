const fs = require('fs'),
      es = require('event-stream'),
      os = require('os');

const models = require('../../db/models');

var s = fs.createReadStream('./words.txt')
  .pipe(es.split())
  .pipe(es.mapSync(line => {
    //pause the readstream
    s.pause();
    console.log("line:", line);
    var word = new models.Word({ word: line });
    //Filter out very small words
    if (line.length > 2) {
      word.save((err, word) => {
        if (err) return console.error(err);
      });
    }
    s.resume();
  })
  .on('error', err => {
    console.log('Error:', err);
  })
  .on('end', () => {
    console.log('Finish reading.');
  })
);

