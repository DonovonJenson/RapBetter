const rhymes = require('./rhymes');
const { retry } = require('../helpers/retry');

const successResponse = (response, results) => {
  response.status(200).send(JSON.stringify(results));
};

const errorResponse = (response, errors) => {
  response.status(400).send(errors);
};

module.exports.fetchRhymes = (req, res) => {
  // get the score and word out of the request
  let { score = 300, word } = req.query;
  // fetch the rhymes and filter by score for the word
  rhymes.filterRhymesByScore(word, score)
    .then(scoreResults => {
      // then bubble sort values from highest to lowest
      return rhymes.bubbleSortRhymes(scoreResults, 'freq');
    })
    .then(sortedResults => {
      // if we need to update the cache, do so
      req.updateCache ? req.updateCache(word, sortedResults) : null;
      // send the success response with the sorted results
      successResponse(res, sortedResults);
    })
    .catch(error => {
      // if there is an error, run the retryFetchRhymes function
      this.retryFetchRhymes(req, res);
    });
};

module.exports.retryFetchRhymes = (req, res) => {
  /*
    Retry is the internal recursive function passed from inside the retry helper

    You can input the error from the catch block, and at the end of the retry loop,
    the return value from the error callback is an array containing all of the error messages collected from the retry loop
  */
  let attempt = (data, success, retry) => {
    // get the score and the word from the data
    let { score = 300, word } = data;
    // attempt to grab the rhymes with the word and score
    rhymes.filterRhymesByScore(word, score)
      .then(scoreResults => {
        // if it's successful, bubble sort the results
        return rhymes.bubbleSortRhymes(scoreResults, 'freq');
      })
      .then(sortedResults => {
        // update the cache with the results
        req.updateCache ? req.updateCache(word, sortedResults) : null;
        // then send them back to the client
        success(sortedResults);
      })
      .catch(error => {
        console.log('something went wrong fetching rhyme data: ', error);
        retry(error);
      });
  };

  // invoke the retry funciton, passing in the attempt, number of retries, the request query, and a success and error callback
  retry(attempt, 10, req.query, (results) => {
    successResponse(res, results);
  }, (errors) => {
    errorResponse(res, errors);
  });
};