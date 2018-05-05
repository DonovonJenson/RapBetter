const mongoose = require('mongoose');

module.exports = mongoose.Schema({
  word: { type: 'string', unique: true }
});