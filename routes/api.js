var meetups = [{name:"Wellington Java"}, {name:"Vanuatu Mongo DB Guys"}];

exports.list = function(req, res) {
	res.send(200, meetups);
};

exports.add = function(req, res) {
	console.log(req.body);
	var new_meetup = req.body;
	meetups.push(new_meetup);
	res.send(201);
};