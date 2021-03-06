'use strict';

/**
 * Home module
 * 
 * This module contains the routes and controller for the
 * homepage, you can take this module as example to create
 * another modules.
 * 
 */

angular.module('sails-angular.home', [])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
	.state('home', {
		url: '/', 
		templateUrl: '/templates/home/home.html',
		controller: 'HomeController'
	});
}])

.controller('HomeController', ['$scope', function ($scope) {
	$scope.features = [
			{
				'title': 'Sails.Js',
				'image': '/images/Sailsjs.png',
				'info': 'Using the latest stable version of Sails.js',
				'ver': 'v0.12.1',
			},
			{
				'title': 'Angular.Js',
				'image': '/images/AngularJS.png',
				'info': 'Using the latest stable version of AngularJS',
				'ver': 'v1.5',
			},
			{
				'title': 'Materialize',
				'image': '/images/Materialize.png',
				'info': 'Using the latest version of Materialize',
				'ver': 'v0.97.5',
			},
			{
				'title': 'Rest API',
				'info': 'Built in simple CRUD to start developing',
			}
		]
}]);