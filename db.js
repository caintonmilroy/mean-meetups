

exports.start = function(mongoose, callback) {
	var startServer = callback;
	mongoose.connect('mongodb://localhost/dev');
	mongoose.connection.on('connected', function(){
		console.log("connected to mongodb");

		mongoose.model('Meetup', {
				name: String,
				logo_url: String,
				date: Date,
				max_attendees: Number,
				status: Boolean,
				organiser: { name: String, email: String },
				attendees: Array
			});

		startServer();
	});
}