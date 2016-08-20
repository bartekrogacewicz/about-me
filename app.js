var app = angular.module('testApp',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('about', {
			url: '/about',
			templateUrl: 'cmp/about/about.html'
		})
		.state('home', {
			url: '/home',
			templateUrl: 'cmp/home/home.html'
		})
		.state('projects', {
			url: '/projects',
			templateUrl: 'cmp/projects/projects.html'
		})
		.state('hobbies', {
			url: '/hobbies',
			templateUrl: 'cmp/hobbies/hobbies.html'
		})
		.state('future', {
			url: '/future',
			templateUrl: 'cmp/future/future.html'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'cmp/contact/contact.html'
		})
});

app.controller("testController", function($scope) {
	$scope.test = 'test';
});