const express = require('express');
const path = require('path');
const app = express();

const models = require('../db/models');

const _public = path.join(__dirname, '../client/public');

 
app.use(express.static(_public));

app.get('/getRhyme', (req, res) =>{
  models.RhymeSet.aggregate(
   [ { $sample: { size: 1 } } ])
  .then((data)=>{
    console.log(data);
    res.send(data);
  })
})

app.get('/*', (req, res) => {
  res.sendFile(`${_public}/index.html`);
})

module.exports = app;