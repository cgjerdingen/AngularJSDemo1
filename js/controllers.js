var myDemoApp = angular.module('myDemoApp', []);

myDemoApp.controller('MyController', function MyController($scope) {
$scope.mentor = {
	'name' : 'Bill Gates',
	'title' : 'Cheif Techology Officer',
	'company' : 'Microsoft'
	};
});
