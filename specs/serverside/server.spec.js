var db = require('../../db');

var mockMongoose = function() {
	var call_count = 0;
	var the_connection_string = "";

	return {
		connect_was_called: function() { return call_count; },
		connection_string: function() { return the_connection_string; },
		connect: function(str) { the_connection_string = str; call_count++; },
		connection: {
			on: function() {}
			}
		};
};

describe("server startup", function() {
	describe("connecting to mongo", function(){
		var mock;

		beforeEach(function(){
			mock = mockMongoose();
		});

		it("make a connection", function() {
			db.start(mock, function(){});
			expect(mock.connect_was_called()).toEqual(1);
			expect(mock.connection_string()).toEqual('mongodb://localhost/dev');
		});

	});
});