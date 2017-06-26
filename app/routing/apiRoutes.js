var path = require('path');

var friends = require('../data/friends.js')

exports.friends = function(req, res) {
	console.log(friends)
	res.json(friends.friendsList);
};

exports.survey = function(req, res) {
	res.json(friends.match(req.body));
};