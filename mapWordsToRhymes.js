const mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/rapbetter');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected!')
});
const {getDatamuseRhymes} = require('./dataMuseWordPopulation.js')


var wordSchema = mongoose.Schema({
  word: { type: 'string', unique: true }
});
var Word = mongoose.model('Word', wordSchema);


  Word.aggregate(
   [ { $sample: { size: 1 } } ])
  .then((data)=>{
  	console.log(data[0].word)
  	getDatamuseRhymes(data[0].word)
  })

