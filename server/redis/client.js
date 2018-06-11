const redis = require('redis');
const port = process.env.REDIS_PORT || 6379;
const client = redis.createClient(port);

module.exports = client;