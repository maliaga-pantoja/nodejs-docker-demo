var express = require('express');
var app = express();
if (!process.env.PORT) {
  const portError = new Error('port not set');
  throw portError;
}
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(process.env.PORT, '0.0.0.0', function () {
  console.log(`Example "Hello World" app listening on port ${process.env.PORT}!`);
});

process.on('unhandledRejection', (e) => {
  console.log(`unhandledRejection ${e.message}`)
})