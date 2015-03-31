var express = require('express');
var compression = require('compression');
var app = express();

var maxAge = 7 * 24 * 3600; // 1 week

app.use(compression());
app.use(express.static('public', { maxAge: maxAge }));

app.listen(process.env.PORT || 5000);
