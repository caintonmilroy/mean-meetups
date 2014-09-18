var mongoose = require('mongoose');

// var meetups = [{name:"Wellington Java"}, {name:"Vanuatu Mongo DB Guys"}];

exports.list = function(req, res) {
	var Meetup = mongoose.model('Meetup');
	Meetup.find({}, function(err, meetups) {
		console.log(meetups);
		res.send(200, meetups);	
	});
};

exports.add = function(req, res) {
	var Meetup = mongoose.model('Meetup');
	var a_new_meetup = new Meetup(req.body);
	a_new_meetup.save(function(){
		res.send(201);
	});
};