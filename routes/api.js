var mongoose = require('mongoose');

exports.list = function(req, res) {
	var Meetup = mongoose.model('Meetup');
	Meetup.find({}, function(err, meetups) {
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