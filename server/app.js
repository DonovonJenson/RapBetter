const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const models = require('../db/models');
const controllers = require('./controllers');
const routes = require('./routes');

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

app.use('/fetch', routes.fetch);

app.get('/*', (req, res) => {
  res.sendFile(`${_public}/index.html`);
})

module.exports = app;