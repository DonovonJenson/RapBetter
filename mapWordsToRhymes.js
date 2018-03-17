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

function mapWordToRhyme (){

	  Word.aggregate(
   [ { $sample: { size: 1 } } ])
  .then((data)=>{
  	getDatamuseRhymes(data[0].word);
  	Word.findByIdAndRemove(data[0]._id, (err, succ) => {
  		if (err){
  			console.log(err)
  		} else {
  			console.log(succ);
				Word.count(function (err, count) {
			    if (!err && count > 0) {
			        setTimeout(mapWordToRhyme, 500);
			    } 
			  })
  		}
  	});
  })

}

mapWordToRhyme();


