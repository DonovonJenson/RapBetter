const mongoose = require('mongoose');
const mongooseURI = 'mongodb://' + (process.env.MONGODB_URI || 'localhost/rapbetter' );
mongoose.connect(mongooseURI);

const models = require('../../db/models');

const getDatamuseRhymes = require('./datamuseWordPopulation');

const mapWordToRhyme = () => {
	models.Word.aggregate([{$sample: {size: 1}}])
    .then(data => {
    	getDatamuseRhymes.getDatamuseRhymes(data[0].word);
    	models.Word.findByIdAndRemove(data[0]._id, (err, succ) => {
    		if (err) {
    			console.log(err);
    		} else {
    			console.log(succ);
  				models.Word.count((err, count) => {
  			    if (!err && count > 0) {
  			        setTimeout(mapWordToRhyme, 100);
  			    } else {
              return; // Handle the case for no results here
            }
  			  })
    		}
    	});
    });

}

mapWordToRhyme(); // Can probably remove this since we don't want this function to run when called