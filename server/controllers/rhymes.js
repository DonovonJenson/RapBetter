const axios = require('axios');

module.exports.fetchRhymes = (word) => { 

  var brainURL = 'http://rhymebrain.com/talk?function=getRhymes&word=' + word;
  return axios.get(brainURL);

};


// Input can either be a word string, or a results array

module.exports.filterRhymesBySyllables = (input, targetSyllables) => {

  let filtered = [];

  if (Array.isArray(input)) {

    input.forEach(rhyme => {
      if (Number(rhyme.syllables) === targetSyllables) {
        filtered.push(rhyme);
      }
    });
    return filtered;

  } else {

    return this.fetchRhymes(input)
      .then(results => {
        results.data.forEach(result => {
          if (result.syllables === targetSyllables) {
            filtered.push(result);
          }
        });
        return filtered;
      });

  }

};


// Input can either be a word string, or a results array


module.exports.filterRhymesByScore = (input, targetScore) => {

  let filtered = [];

  if (Array.isArray(input)) {

    input.forEach(rhyme => {
      if (Number(rhyme.score) >= targetScore) {
        filtered.push(rhyme);
      }
    });
    return filtered;

  } else {

    return this.fetchRhymes(input)
      .then(results => {
        results.data.forEach(result => {
          if (result.score === targetScore) {
            filtered.push(result);
          }
        });
        return fitered;
      });

  }

};