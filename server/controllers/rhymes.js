const axios = require('axios');

module.exports.fetchRhymes = (word) => { 

  var brainURL = 'http://rhymebrain.com/talk?function=getRhymes&word=' + word;
  return axios.get(brainURL);

};


// Input can either be a word string, or a results array

module.exports.filterRhymesBySyllables = (input, targetSyllables) => {

  // declare universal filtering function
  let filterBySyllables = (list) => {
    let filtered = [];
    list.forEach(rhyme => {
      if (Number(rhyme.syllables) === Number(targetSyllables)) {
        filtered.push(rhyme);
      }
    });
    return filtered;
  };

  // if the input is an array, we have an already extracted list
  if (Array.isArray(input)) {
    return filterBySyllables(input);
  } else {
    // if the input is a string, the we have to get a results list first, then filter
    return this.fetchRhymes(input)
      .then(results => {
        return filterBySyllables(results.data);
      });
  }

};


// Input can either be a word string, or a results array


module.exports.filterRhymesByScore = (input, targetScore) => {

  // declare universal filtering function
  let filterByScore = (list) => {
    let filtered = [];
    list.forEach(rhyme => {
      if (Number(rhyme.score) >= Number(targetScore)) {
        filtered.push(rhyme);
      }
    });
    return filtered;
  };

  // if the input is an array, we have an already extracted list
  if (Array.isArray(input)) {
    return filterByScore(input);
  } else {
    // if the input is a string, the we have to get a results list first, then filter
    return this.fetchRhymes(input)
      .then(results => {
        return filterByScore(results.data);
      });
  }

};


// Input takes in an array of rhyme objects, and a configuration string matching an property to compare against

module.exports.bubbleSortRhymes = (list, config) => {

  let filter = config || 'freq'; // If no config is supplied, default to bubble search by frequency
  let length = list.length;

  for (let i = length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (Number(list[j - 1][filter]) < Number(list[j][filter])) {
        let temp = list[j - 1];
        list[j - 1] = list[j];
        list[j] = temp;
      }
    }
  }

  return list;

};