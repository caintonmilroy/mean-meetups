var meetup = angular.module('MeetupApp', []);

meetup.factory('MeetupServer', [ '$http', function($http) {	

	function errorLogger(data, status) { console.log(status, data); }

	return { 
		list: function() { 
			return $http.get('/api/meetups').error(errorLogger);
		},
		add: function(meetup) { 
			return $http.post('/api/meetup', meetup).error(errorLogger);
		} 
	};
 }]);

function meetupObj() {
	return {
		name: "",
		logo_url: "https://lh5.googleusercontent.com/-Zopx8M9odmQ/AAAAAAAAAAI/AAAAAAAAANE/ocRl5i14Enk/s120-c/photo.jpg",
		date: "",
		max_attendees: 0,
		status: true,
		organiser: { name: "", email: "" },
		attendees: []				
	};
};

meetup.controller('meetupItemController', ["$scope", function($scope) {
	$scope.signup = function() {
		if($scope.signup_email) {			
			$scope.meetups[$scope.$index].attendees.push($scope.signup_email);
			//MeetupServer.update($scope.meetups[index]);
		}
	};
}]);

meetup.controller('meetupController',["$scope", "MeetupServer", function($scope, MeetupServer){
	$scope.new_meetup = meetupObj();
	$scope.meetups = [];

	MeetupServer.list()
		.success(function(data) {
			console.log(data);
			$scope.meetups = data;
		});

	$scope.addMeetup = function(){
		if($scope.new_meetup.name){
			$scope.meetups.push($scope.new_meetup);			
			MeetupServer.add($scope.new_meetup);
			$scope.form.$setPristine();
			$scope.new_meetup = meetupObj();
		}
	};
}]);