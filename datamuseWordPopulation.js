const axios = require('axios')
const mongoose = require('mongoose');

var rhymeSchema = mongoose.Schema ({
  coreWord: {type: String, unique: true}, 
  rhymeSet: Array
})
var Rhymeset = mongoose.model('Rhymeset',rhymeSchema)


//  Sort criteria -> 
//  #1. Syllable Count
//  #2. 50% score, 50% rhyme frequency 

module.exports.getDatamuseRhymes = (rhymeWord) => {
	//Refactor to use Given word
	//Rhymebrain results 
	var datamuseURL = 'http://api.datamuse.com/words?rel_rhy=' + rhymeWord + '&md=f';

	axios.get(datamuseURL)
	.then((response) =>{
		var body = response.data
		body.sort((a,b) => {
			var value1 = (a.score*.9)+(a.tags[0].split(':')[1]*.1)
			var value2 = (b.score*.9)+(b.tags[0].split(':')[1]*.1)
			if (a.numSyllables > b.numSyllables) {
				return 1
			} else if (a.numSyllables < b.numSyllables){
				return -1;
			} else if (a.numSyllables === b.numSyllables){
			if (value1 > value2){
				return -1
			} else {
				return 1
			}
			}
		})
		var currentRhyme = rhymeWord;
		var rhymes = [body[0].word,body[1].word,body[2].word,body[3].word]
		var newRhymes = new Rhymeset({coreWord:currentRhyme,rhymeSet: rhymes})
		newRhymes.save((err,newRhymes)=>{
				console.log(err,newRhymes)
		})


	})
}