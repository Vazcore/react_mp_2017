var express = require('express');
var app = express();
import render from './serverRender';

app.use('/public', express.static('public'));
app.use('/dist', express.static('dist'));

app.get('/search/:title/:mode', function (req, res) {
  var html = render('search', req, res);
  res.send(html);
});

app.get('/', function (req, res) {
  var html = render('main', req, res);
  res.send(html);
});

app.get('/api', function (req, res) {
  res.send('React Mentoring API');
});


app.listen(3000, function () {
  console.log('App is on port 3000');
});