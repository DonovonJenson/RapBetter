const express = require('express');
const router = express.Router();

const controllers = require('../controllers');
const middleware = require('../middleware');

router.route('/fetch-rhymes')
  .get(middleware.cache.checkCacheForWordResults, controllers.tool.fetchRhymes);

module.exports = router;