'use strict';

angular.module('personalsiteAngularApp')
  .controller('MainCtrl', function ($scope, $http, $interval) {

  	// $scope.tagword = "hang";
  	$scope.tagwords = ["hang", "chill", "meet", "study", "hack", "party", "have a few beers", "game"];
  	$scope.tagword = "hang";

  	var count = 0;

  	$interval(function() {
  		$scope.tagword = $scope.tagwords[count];
  		count++

  		if (count >= $scope.tagwords.length) {
  			count = 0;
  		};

  	}, 1500);

  	// setInterval(function(){alert("Hello")},3000);

  	// setInterval( function() {
  	// 	$scope.tagword = count;
  	// 	count++;

  	// }, 1000)
  	// var interval = setInterval(function() {
  	// 	$scope.tagword = $scope.tagwords[count];
  	// 	count++;

  	// 	if (count > $scope.tagwords.count) {
  	// 		count=0;
  	// 	};
  	// }, 1000);


  });
