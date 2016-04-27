var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
// var passport = require('passport');
// var passport = require('./config/passport');
// var passport = passport();


// app.use(passport.initialize());
// app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, './client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
	console.log('LISTENING ON PORT 8000');
});