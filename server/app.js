const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const models = require('../db/models');
const controllers = require('./controllers');

const _public = path.join(__dirname, '../client/public');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
 
app.use(express.static(_public));

// app.get('/getRhyme', (req, res) =>{
//   models.RhymeSet.aggregate(
//    [ { $sample: { size: 1 } } ])
//   .then((data)=>{
//     console.log(data);
//     res.send(data);
//   })
// })


app.post('/fetch-videos', (req, res) => {

  let { filter, maxResults } = req.body

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

app.post('/fetch-quick-rhymes', (req, res) => {

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


app.get('/*', (req, res) => {
  res.sendFile(`${_public}/index.html`);
})

module.exports = app;