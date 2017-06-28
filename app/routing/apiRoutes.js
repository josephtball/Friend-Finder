var path = require('path');

var friends = require('../data/friends.js')

exports.friends = function(req, res) {
	res.json(friends.friendList);
};

exports.survey = function(req, res) {
	res.json(friends.match(req.body));
};