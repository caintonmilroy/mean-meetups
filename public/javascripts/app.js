var meetup = angular.module('MeetupApp', ['ngResource', 'ngRoute']);

meetup.factory('MeetupServer', [ '$resource', function($resource) {	
	var meetups =  [{name:"Cainton"}, {name:"Milroy"}];

	return { 
		list: function() { 
			var meetups_copy = [];
			for ( var i = 0; i < meetups.length; i++) {
				meetups_copy.push( meetups[i] );
			}
			return meetups_copy; 
		},
		add: function(meetup) { meetups.push(meetup) } 
	};

 }]);

meetup.controller('meetupController',["$scope", "MeetupServer", function($scope, MeetupServer){
	$scope.meetups = MeetupServer.list();

	$scope.addMeetup = function(the_name){
		if(the_name){
			var meetup = {name: the_name};
			$scope.meetups.push(meetup);
			MeetupServer.add(meetup);
			$scope.name = "";
		}
	};
}]);