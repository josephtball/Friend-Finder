var path = require('path');

// handles get for /
exports.index = function(req, res) {
	res.sendFile(path.join(__dirname, '../public/home.html'));
};

// handles get for /survey
exports.survey = function(req, res) {
	res.sendFile(path.join(__dirname, '../public/survey.html'));
};