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

meetup.controller('meetupController',["$scope", "MeetupServer", function($scope, MeetupServer){
	$scope.meetups = [];

	MeetupServer.list()
		.success(function(data) {
			console.log(data);
			$scope.meetups = data;
		});

	$scope.addMeetup = function(the_name){
		if(the_name){
			var meetup = {name: the_name};
			$scope.meetups.push(meetup);			
			$scope.name = "";
			MeetupServer.add(meetup);
		}
	};
}]);