var meetup = angular.module('meetup', []);

meetup.controller('meetupController',["$scope", function($scope){
	$scope.meetups =[
		{name:"Cainton"},
		{name:"Milroy"}
	]
	$scope.addMeetup = function(){
		console.log($scope.name);
		if($scope.name){
			$scope.meetups.push({name:$scope.name})
		}

	}
}]);
