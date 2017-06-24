var path = require('path');

exports.index = function(req, res) {
	res.sendFile(path.join(__dirname, '../public/home.html'));
};

exports.survey = function(req, res) {
	res.sendFile(path.join(__dirname, '../public/survey.html'));
};