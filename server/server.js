var express = require('express');
var app = express();

app.get('/api', function (req, res) {
  res.send('React Mentoring API');
});

app.listen(3000, function () {
  console.log('App is on port 3000');
});