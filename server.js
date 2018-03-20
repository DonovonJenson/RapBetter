const express = require('express');
var mongoose = require('mongoose');
var db = mongoose.connection;
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const path = require('path');


//This line will need to be updated at deployment
//mongoose.connect('mongodb://localhost/rapbetter');
var mongooseURI = 'mongodb://' + (process.env.MONGODB_URI || 'localhost/rapbetter' )

mongoose.connect(mongooseURI);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected!')
});

var rhymeSchema = mongoose.Schema ({
  coreWord: {type: String, unique: true}, 
  rhymeSet: Array
})

var Rhymeset = mongoose.model('Rhymeset',rhymeSchema)

 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.get('/getRhyme', (req, res) =>{
  Rhymeset.aggregate(
   [ { $sample: { size: 1 } } ])
  .then((data)=>{
    console.log(data);
    res.send(data);
  })
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'www/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

var portNumber = process.env.port || 3000;
const server = app.listen(portNumber, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});