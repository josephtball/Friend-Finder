// node packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// files to handle routes
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js');

// set port
var PORT = process.env.PORT || 3030;

// setup express
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// set static folder
app.use(express.static('./app/public'));

// html routes
app.use('/', htmlRoutes);
//api routes
app.use('/api', apiRoutes)

// setup server to listen
app.listen(PORT, function() {
	console.log('Server listening on PORT '+PORT);
});