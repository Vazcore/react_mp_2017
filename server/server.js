var express = require('express');
var app = express();
import render from './serverRender';

app.use('/public', express.static('public'));
app.use('/dist', express.static('dist'));

app.get('/film/:title', function (req, res) {
  render('film', req, res);
});

app.get('/search/:title/:mode', function (req, res) {
  render('search', req, res);
});

app.get('/', function (req, res) {
  render('main', req, res);
});

app.get('/api', function (req, res) {
  res.send('React Mentoring API');
});


app.listen(3000, function () {
  console.log('App is on port 3000');
});