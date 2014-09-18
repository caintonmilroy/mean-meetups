
exports.start = function(mongoose, callback) {
	var startServer = callback;
	mongoose.connect('mongodb://localhost/dev');
	mongoose.connection.on('connected', function(){
		console.log("connected to mongodb");

		mongoose.model('Meetup', {name: String});

		startServer();
	});
}