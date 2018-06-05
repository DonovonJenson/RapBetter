const express = require('express');
const router = express.Router();

const controllers = require('../controllers');
const middleware = require('../middleware');

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
  .get(middleware.cache.checkCacheForVideoPlaylist, (req, res) => {

    let { filter, maxResults, playlistId } = req.query;

    controllers.youtube.fetchVideosByPlaylist(playlistId, maxResults)
      .then(results => {
        return controllers.youtube.filterVideosByPublishedDate(results.data.items, filter);
      })
      .then(filteredVideos => {
        req.udpateCache ? req.updateCache(playlistId, filteredVideos) : null;
        res.status(200).send(filteredVideos);
      })
      .catch(error => {
        console.log(error);
        res.status(400).send('Something went wrong while fetching videos: ', error);
      });
      
  });

module.exports = router;