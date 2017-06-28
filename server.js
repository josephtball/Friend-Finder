// node packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// routes
var html = require('./app/routing/htmlRoutes.js');
var api = require('./app/routing/apiRoutes.js');

// set port
var PORT = process.env.PORT || 3030;

// setup express
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static('./app/public'));

// html routes
app.get('/', html.index);
app.get('/survey', html.survey);

// api routes
app.get('/api/friends', api.friends);
app.post('/api/friends', api.survey);

// setup server to listen
app.listen(PORT, function() {
	console.log('Server listening on PORT '+PORT);
});