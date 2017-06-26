exports.match = function(user) {
	var differenceArray = [];

	for (var i = 0; i < friendList.length; i++) {
		var totalDiff = 0;
		for (var j = 0; j < 10; j++) {
			totalDiff += Math.abs(friendList[i].scores[j] - user.scores[j]);
		}
		differenceArray.push(totalDiff);
	}

	console.log(differenceArray);

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
	}

	return match;
}

var friendList = [
	{
		"name": "Ahmed",
		"photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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
		"photo": "https://m.facebook.com/photo.php?fbid=10208500699025296&id=1542229019&set=a.1549418665704.77596.1542229019&source=11",
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
		"photo": "https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/12741971_10205764267089153_4212986785721953092_n.jpg?oh=4e18265f7d380167223a97fbd7eba278&oe=57B78445",
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