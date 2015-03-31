require('dotenv').load();
var express = require('express');
var compression = require('compression');
var app = express();

var config = require('./config/server.json');

app.use(compression());
app.use(express.static('public', { maxAge: config.maxAge }));

app.listen(process.env.PORT || config.port);
