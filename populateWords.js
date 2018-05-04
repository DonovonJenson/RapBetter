const axios = require('axios');

// requires mongoose
const mongoose = require('mongoose');
// imports the schema
const {rhymeSchema} = require('./server.js');
// creates a model with the schema
var Rhymeset = mongoose.model('Rhymeset',rhymeSchema);

// creates a funciton that uses model


// VVVV controller function

module.exports.getRhymes = (rhymeWord) => {
	//Rhymebrain results 
	var brainURL = 'http://rhymebrain.com/talk?function=getRhymes&word=' + rhymeWord;

	axios.get(brainURL)
	.then((response) =>{
		var body = response.data
		if (body[0].freq > 17){
			var zero = body[0].word;
			body.shift();
		  	body.sort((a,b) => {
		  		if (a.score !== b.score){
		  			return b.score - a.score
		  		} else if (a.syllables !== b.syllables) {
		  			return a.syllables - b.syllables
		  		} else {
				  return b.freq - a.freq;
				}
			})
		var currentRhyme = zero;
		var rhymes = [body[1].word,body[2].word,body[3].word,body[4].word]
		var newRhymes = new Rhymeset({coreWord:currentRhyme,rhymeSet: rhymes})
		newRhymes.save((err,newRhymes)=>{
				console.log(err,newRhymes)
		})
		}	

	})


}

