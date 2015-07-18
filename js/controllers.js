var mentorControllers = angular.module('mentorControllers', ['ngAnimate']);

mentorControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.mentors = data;
		/*$scope.mentorOrder = 'itemId';*/
	});
}]);

mentorControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('js/data.json').success(function(data) {
		$scope.mentors = data;
		$scope.whichItem = $routeParams.itemId;

		if ($routeParams.itemId > 0) {
			$scope.prevItem = Number($routeParams.itemId)-1;
		} else {
			$scope.prevItem = $scope.mentors.length-1;
		}
		if ($routeParams.itemId < $scope.mentors.length-1) {
			$scope.nextItem = Number($routeParams.itemId)+1;
		} else {
			$scope.nextItem = 0;
		}
	});

}]);
