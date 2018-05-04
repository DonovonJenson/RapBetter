const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(portNumber, () => {
  const host = server.address().address;
  console.log('Example app listening at http://%s:%s', host, port);
});