const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const db = require('../db');
const models = require('../db/models');

const routes = require('./routes');

const _public = path.join(__dirname, '../client/public');
app.use(express.static(_public));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
 
app.use('/fetch', routes.fetch);

app.get('/*', (req, res) => {
  res.sendFile(`${_public}/index.html`);
});

module.exports = app;