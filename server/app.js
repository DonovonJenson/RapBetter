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

app.post('/fetchRhymes', (req, res) => {

  // grab the number of syllables for the input word, 
    // then grab the results of that word and the syllables generated

  controllers.wordInfo.fetchWordInfo(req.body.word)
    .then(result => {
      return controllers.wordInfo.extractWordSyllables(result);
    })
    .then(syllables => {
      return controllers.rhymes.filterRhymesBySyllables(req.body.word, syllables);
    })
    .then(syllableResults => {
      return controllers.rhymes.filterRhymesByScore(syllableResults, 300);
    })
    .then(scoreResults => {
      res.status(201).send(scoreResults);
    });


});


app.get('/*', (req, res) => {
  res.sendFile(`${_public}/index.html`);
})

module.exports = app;