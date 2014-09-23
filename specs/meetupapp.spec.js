var meetupAppMock = angular.module("MeetupAppMock",[]);

meetupAppMock.factory('MeetupServer', function() {
	return {
			list: function() { this.list_was_called++; return {success:function(){}}; },
			add: function(meetup) { this.add_was_called++;
				this.add_was_called_with = meetup; },
			list_was_called: 0,
			add_was_called: 0,
			add_was_called_with: {}
		};
});

describe("A working test environment", function() {
	it("a passing test", function() {
		expect(true).toBe(true);
	});
	it("angular is available", function() {
		expect(angular).toBeDefined();
	});
});

describe("Meetup Controller", function() {
	var crtl, scope, mockServer;

	beforeEach(function(){
		module("MeetupApp");
		module("MeetupAppMock");
	
		inject(function($injector){
			mockServer = $injector.get("MeetupServer");
		});

		inject(function($controller, $rootScope) {
			scope = $rootScope.$new;

			scope.form = {
				was_called: 0,
				$setPristine: function() { this.was_called++;}
			};

			ctrl = $controller('meetupController', 
				{$scope: scope, "MeetupServer": mockServer});
		});
	});

	it("should have a meetupController", function() {
		expect(ctrl).toBeDefined();
		expect(scope.addMeetup).toBeDefined();
		expect(scope.meetups).toBeDefined();
		expect(scope.name).toBeDefined();
	});

	it("should retreive a list of meetups from server", function() {
		expect(mockServer.list_was_called).toEqual(1);
	});

	describe("Adding a Meetup", function() {
		beforeEach(function() {
			scope.new_meetup = meetupObj();
			scope.new_meetup.name = "required";
			scope.new_meetup.max_attendees = 20;			
			scope.addMeetup();
		});

		it("should add the new meetup to the local list", function() {
			expect(scope.meetups.length).toBe(1);
		});

		it("should add the new meetup to the server", function(){
			expect(mockServer.add_was_called).toEqual(1);
			expect(mockServer.add_was_called_with.name).toEqual("required");
			expect(mockServer.add_was_called_with.max_attendees).toEqual(20);
		});

		it("should reset the form data", function() {
			expect(scope.new_meetup.name).toBe("");
			expect(scope.new_meetup.max_attendees).toBe(0);
		});

		it("should mark the form as Pristine", function() {
			expect(scope.form.was_called).toEqual(1);
		});
	});
});