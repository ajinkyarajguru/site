app=angular.module('main',['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider.when("/",{
		templateUrl:'templates/default.html',
		controller:"PageCtrl"
	})
	.when("/about",{
		templateUrl:'templates/page.html',
		controller:"PageCtrl"
	})
	.when("/resume",{
		templateUrl:'templates/page.html',
		controller:"PageCtrl"
	}).otherwise({ redirectTo: '/' });

	$locationProvider.html5Mode(true);
}]);


app.controller('PageCtrl', ['$scope', function ($scope) {
	console.log("Send my regards");
}]);
