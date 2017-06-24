var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var html = require('./app/routing/htmlRoutes.js');
var api = require('./app/routing/apiRoutes.js');

var app = express();
var PORT = process.env.PORT || 3030;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.get('/', html.index);
app.get('/survey', html.survey);

//app.get('/api/friends', api.friends);
//app.post('/api/friends', api.survey);

app.listen(PORT, function() {
	console.log('Server listening on PORT '+PORT);
});