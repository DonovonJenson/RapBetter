const mongoose = require('mongoose');
const schemas = require('../schemas');

module.exports = mongoose.model('Rhymeset', schemas.rhymeSetSchema);