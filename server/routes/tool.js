const express = require('express');
const router = express.Router();

router.route('/get-rhymes')
  .get(/* middelware here */ (req, res) => {
    res.status(200).send('successful query');
  });

module.exports = router;