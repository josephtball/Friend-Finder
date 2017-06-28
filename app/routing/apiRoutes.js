var path = require('path');

var friends = require('../data/friends.js')

// handles get for /api/friends
exports.friends = function(req, res) {
	res.json(friends.friendList);
};

// handles post for /api/friends
exports.survey = function(req, res) {
	res.json(friends.match(req.body));
};