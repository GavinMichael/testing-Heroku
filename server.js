var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.user(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

app.listen(port);