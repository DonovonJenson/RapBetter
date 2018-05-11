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

app.get('/fetch-videos', (req, res) => {


  console.log('made it to /fetch-videos');

  res.status(200).send('success');

});

app.post('/fetch-quick-rhymes', (req, res) => {

  // grab the information about the word from the rhymebrain API
  // extract the syllables out of the word information
  // use the number of syllables for the input word to filter out all matching results from the input word
  // bubble sort the results by frequency (indicating more likelihood in the result)
  // send the results back to the client

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