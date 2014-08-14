var meetup = angular.module('meetup', []);

meetup.factory('MeetupServer', [ function() {	
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

	$scope.addMeetup = function(){
		if($scope.name){
			var meetup = {name:$scope.name};
			$scope.meetups.push(meetup);
			MeetupServer.add(meetup)
			$scope.name = "";
		}
	};
}]);