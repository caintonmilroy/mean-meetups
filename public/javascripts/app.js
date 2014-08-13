var meetup = angular.module('meetup', []);

meetup.controller('meetupController',["$scope", function($scope){
	$scope.meetups =[
		{name:"Cainton"},
		{name:"Milroy"}
	]
}]);