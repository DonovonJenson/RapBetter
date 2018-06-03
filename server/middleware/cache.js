const redis = require('redis');
const port = process.env.REDIS_PORT || 6379;
const client = redis.createClient(port);

module.exports.checkCacheForValue = (req, res, next) => {

  let { word } = req.query;

  client.get(word, (error, data) => {
    if (error) {
      throw error;
    }
    if (data === null) { 
      // create a callback to update the cache later on
      let updateCache = (word, results) => {
        // console.log(`updating property ${word} with results: ${JSON.stringify(results)}`);
        client.set(word, JSON.stringify(results));
      };
      // attach the callback to the request
      req.updateCache = updateCache;
      console.log('no results were found in cache, tasking request to update the cache');
      // go to the next function in the chain
      next();
    } else {
      // if there was data, this is where we could do some data checking
      // or some other data 'freshness' checking to see if we need to update the cached results
      res.status(200).send(data);
    }
  });
};