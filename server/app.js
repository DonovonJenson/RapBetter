const express = require('express');
const path = require('path');
const app = express();


// ---------- MOVE TO DB DIRECTORY --------------------

var mongoose = require('mongoose');
var db = mongoose.connection;

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

// ----------------------------------------------------
 

 
app.use(express.static(path.join(__dirname, '../www')));

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

module.exports = app;