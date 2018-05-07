const axios = require('axios');

module.exports.fetchWordInfo = (word) => {
  let brainURL = `http://rhymebrain.com/talk?function=getWordInfo&word=${word}`;
  return axios.get(brainURL);
};

module.exports.extractWordSyllables = (result) => {
  return result.data.syllables;
};