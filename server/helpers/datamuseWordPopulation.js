const axios = require('axios')
const models = require('../../db/models');

module.exports.getDatamuseRhymes = (rhymeWord) => {
	var datamuseURL = 'http://api.datamuse.com/words?rel_rhy=' + rhymeWord + '&md=f';

	axios.get(datamuseURL)
		.then(response => {
			var body = response.data;

			body = body.filter(word => !word.includes(' '))
			console.log(body)

			body.sort((a,b) => {
				var value1 = (a.score * .9) + (a.tags[0].split(':')[1] * .1);
				var value2 = (b.score * .9) + (b.tags[0].split(':')[1] * .1);
				if (a.numSyllables > b.numSyllables) {
					return 1;
				} else if (a.numSyllables < b.numSyllables) {
					return -1;
				} else if (a.numSyllables === b.numSyllables) {
					if (value1 > value2) {
						return -1;
					} else {
						return 1;
					}
				}
			});

			var rhymes = [body[0].word,body[1].word,body[2].word,body[3].word];

			var newRhymes = new models.RhymeSet({coreWord: rhymeWord, rhymeSet: rhymes});

			newRhymes.save((err,newRhymes)=>{
				console.log(err,newRhymes);
			});
		});

}