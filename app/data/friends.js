exports.match = function(user) {
	var differenceArray = [];

	for (var i = 0; i < friendList.length; i++) {
		var totalDiff = 0;
		for (var j = 0; j < 10; j++) {
			totalDiff += Math.abs(friendList[i].scores[j] - user.scores[j]);
		}
		differenceArray.push(totalDiff);
	}

	var index = 0;
	var lowest = differenceArray[0];
	for (var i = 1; i < differenceArray.length; i++) {
		if (differenceArray[i] < lowest) {
			lowest = differenceArray[i];
			index = i;
		}
	}
	var match = friendList[index];
	if (user.add == 'true') {
		delete user.add;
		friendList.push(user);
	}

	return match;
}

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

exports.friendList = friendList;