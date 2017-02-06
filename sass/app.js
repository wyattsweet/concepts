var express = require('express'),
    app     = express(),
    path    = require('path')

app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.use('/', function (req, res) {
  res.send('/index.html');
});

var port = 3000;

app.listen(port);

console.log('Listening on port ' + port);
