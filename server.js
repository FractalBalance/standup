var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('DEHUMANIZE YOURSELF AND FACE TO BLOODSHED!!!');
});

app.listen(3000, function () {
  console.log('OPENING WARP GATE')
})