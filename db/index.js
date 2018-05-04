const mongoose = require('mongoose');

// create our database URI string
const mongooseURI = 'mongodb://' + (process.env.MONGODB_URI || 'localhost/rapbetter' );

// initialize the connection
// NOTE:  This only needs to be done once
mongoose.connect(mongooseURI);

// grab the connection information for reference
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`MongoDB connected on host ${db.host} port ${db.port}`);
});