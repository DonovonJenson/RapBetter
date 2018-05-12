const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

router.route('/quick-rhymes')
  .post((req, res) => {
    let keyword = req.body.word.toLowerCase();

    controllers.wordInfo.fetchWordInfo(keyword)
      .then(result => {
        return controllers.wordInfo.extractWordSyllables(result);
      })
      .then(syllables => {
        return controllers.rhymes.filterRhymesBySyllables(keyword, syllables);
      })
      .then(syllableResults => {
        return controllers.rhymes.filterRhymesByScore(syllableResults, 300);
      })
      .then(scoreResults => {
        return controllers.rhymes.bubbleSortRhymes(scoreResults, 'freq');
      })
      .then(sortedResults => {
        res.status(201).send(sortedResults);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  });

router.route('/videos')
  .post((req, res) => {
    let { filter, maxResults } = req.body;

    controllers.youtube.fetchVideosByPlaylist('PLB7E22B02CFF47F35', maxResults)
      .then(results => {
        return controllers.youtube.filterVideosByPublishedDate(results.data.items, filter);
      })
      .then(filteredVideos => {
        res.status(200).send(filteredVideos);
      })
      .catch(error => {
        console.log(error);
        res.status(400).send('Something went wrong while fetching videos: ', error);
      });
  });

module.exports = router;