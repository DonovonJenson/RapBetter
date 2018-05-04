const mongoose = require('mongoose');

module.exports = mongoose.Schema ({
  coreWord: {type: String, unique: true}, 
  rhymeSet: Array
});