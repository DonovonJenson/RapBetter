const client = require('../redis');

module.exports.checkCacheForWordResults = (request, response, next) => {
  let { word } = request.query;
  checkCacheForValue(word, results => {
    sendSuccess(response, results);
  }, () => applyUpdateCache(request, next));
};

module.exports.checkCacheForVideoPlaylist = (request, response, next) => {
  let { playlistId } = request.query;
  checkCacheForValue(playlistId, results => {
    sendSuccess(response, results);
  }, () => applyUpdateCache(request, next));
};

function sendSuccess(response, data) {
  response.status(200).send(JSON.stringify(data));
}

function checkCacheForValue(key, successCB, failureCB) {
  client.get(key, (error, data) => {
    if (error) {
      throw error;
    }
    if (data === null) { 
      failureCB();
    } else {
      successCB(data);
    }
  });
}

function applyUpdateCache(request, next, config = {}) {

  // config.expireValue is in seconds
  // 1 = 1 second
  // 60 = 1 minute
  // 3600 = 1 hour

  let { 
    setExpire = true,    // default is to set true, keeps non-critical data in cache
    expireValue = 3600   // default time is set to 1 hour.
  } = config;

  if (setExpire) {
    request.updateCache = (key, value) => {client.setex(key, expireValue, JSON.stringify(value));};
  } else {
    request.updateCache = (key, value) => {client.set(key, JSON.stringify(value));};
  }
  
  next();
}