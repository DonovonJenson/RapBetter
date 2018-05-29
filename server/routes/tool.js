const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

router.route('/get-bpm-from-file')
  .post((req, res) => {

    console.log('request body: ', req.body);

  });

module.exports = router;