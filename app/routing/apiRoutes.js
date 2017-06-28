var express = require('express');
var friends = require('../data/friends.js');

// setup router
var router = express.Router();

// routes related to api
router.route('/friends')
	.get(function(req, res) {
		res.json(friends.friendList);
	})
	.post(function(req, res) {
		res.json(friends.match(req.body));
	});

module.exports = router;