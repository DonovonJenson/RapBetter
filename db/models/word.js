const mongoose = require('mongoose');
const schemas = require('../schemas');

module.exports = mongoose.model('Word', schemas.wordSchema);