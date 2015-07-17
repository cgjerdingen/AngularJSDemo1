var myDemoApp = angular.module('myDemoApp', []);

myDemoApp.controller('MyController', ['$scope', '$http', function MyController($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.mentors = data;
		$scope.mentorOrder = 'name';
	});

}]);
