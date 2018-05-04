var fs = require('fs'),
    es = require('event-stream'),
    os = require('os');


const mongoose = require('mongoose');
var db = mongoose.connection;
var mongooseURI = 'mongodb://' + (process.env.MONGODB_URI || 'localhost/rapbetter' )
mongoose.connect(mongooseURI);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected!')
});


var wordSchema = mongoose.Schema({
  word: { type: 'string', unique: true }
});
var Word = mongoose.model('Word', wordSchema);


var s = fs.createReadStream('./words.txt')
    .pipe(es.split())
    .pipe(es.mapSync(function(line) {
        //pause the readstream
        s.pause();
        console.log("line:", line);
        var word = new Word({ word: line });
        //Filter out very small words
        if (line.length > 2){
            word.save(function (err, word) {
            if (err) return console.error(err);
            });
        }
        s.resume();
    })
    .on('error', function(err) {
        console.log('Error:', err);
    })
    .on('end', function() {
        console.log('Finish reading.');
        mongoose.connection.close()
    })
);

