// find match function
exports.match = function(user) {
	var differenceArray = [];

	// loop through available matches
	for (var i = 0; i < friendList.length; i++) {
		// counter to add score difference for each question
		var totalDiff = 0;
		// loop through each question and compare score
		for (var j = 0; j < 10; j++) {
			totalDiff += Math.abs(friendList[i].scores[j] - user.scores[j]);
		}
		// store difference in questions for each available match
		differenceArray.push(totalDiff);
	}

	// find lowest difference
	var index = 0;
	var lowest = differenceArray[0];
	// compare each index in differenceArray to lowest number
	for (var i = 1; i < differenceArray.length; i++) {
		if (differenceArray[i] < lowest) {
			// if current index in differenceArray is lower than 'lowest' set to 'lowest' and store index
			lowest = differenceArray[i];
			index = i;
		}
	}

	// set match to friend at index found above
	var match = friendList[index];

	// add user to friendList if option was selected
	if (user.add == 'true') {
		// delete 'add' key from 'user' object to keep friendList format
		delete user.add;
		friendList.push(user);
	}

	// return the friend the user was matched with
	return match;
}

// list of available matches
var friendList = [
	{
		"name": "Ahmed",
		"photo": "http://ahmedsoliman.com/content/images/2014/Mar/AhmedSoliman_blog_square.png",
		"scores": [
			"5",
			"1",
			"4",
			"4",
			"5",
			"1",
			"2",
			"5",
			"4",
			"1"
			]
	},
	{
		"name": "Jacob Deming",
		"photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
		"scores": [
			"4",
			"2",
			"5",
			"1",
			"3",
			"2",
			"2",
			"1",
			"3",
			"2"
			]
	},
	{
		"name": "Jeremiah Scanlon",
		"photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
		"scores": [
			"5",
			"2",
			"2",
			"2",
			"4",
			"1",
			"3",
			"2",
			"5",
			"5"
			]
	},
	{
		"name": "Louis T. Delia",
		"photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
		"scores": [
			"3",
			"3",
			"4",
			"2",
			"2",
			"1",
			"3",
			"2",
			"2",
			"3"
			]
	},
	{
		"name": "Lou Ritter",
		"photo": "http://www.ecigadvanced.com/blog/wp-content/uploads/2014/01/LR-avatar.jpg",
		"scores": [
			"4",
			"3",
			"4",
			"1",
			"5",
			"2",
			"5",
			"3",
			"1",
			"4"
			]
	},
	{
		"name": "Jordan Biason",
		"photo": "https://lh4.googleusercontent.com/-fZIGYBuyH5M/AAAAAAAAAAI/AAAAAAAAAGI/nlXvyvQ2-w8/photo.jpg",
		"scores": [
			"4",
			"4",
			"2",
			"3",
			"2",
			"2",
			"3",
			"2",
			"4",
			"5"
			]
	}
];

// export list of available matches
exports.friendList = friendList;