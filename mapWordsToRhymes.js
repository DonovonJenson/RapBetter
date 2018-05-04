// import mongoose
const mongoose = require('mongoose');

// create our connection
var db = mongoose.connection;

// create the URI string
var mongooseURI = 'mongodb://' + (process.env.MONGODB_URI || 'localhost/rapbetter' )

// connect to the database using the string
mongoose.connect(mongooseURI);

// run some database stuffs
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected!')
});

// import the controller function from the file
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
			        setTimeout(mapWordToRhyme, 100);
			    } else /{
            mongoose.connection.close()
          }
			  })
  		}
  	});
  })

}

mapWordToRhyme();


