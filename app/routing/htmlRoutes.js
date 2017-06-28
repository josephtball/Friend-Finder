var express = require('express');
var path = require('path');

// setup router
var router = express.Router();

// home page route
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/home.html'));
});

// survey page route
router.get('/survey', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/survey.html'));
});

module.exports = router;