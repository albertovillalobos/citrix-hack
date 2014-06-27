'use strict';

angular.module('personalsiteAngularApp')
  .controller('NewhangCtrl', function ($scope, $http, $interval) {


  		$scope.friends = [
	  		{
	  			name:'Liam Cardenas'
	  		},
	  		{
	  			name:'Brent Kirkland'
	  		},
	  		{
	  			name:'Nick Brown'
	  		},

  		];

  		console.log($scope.friends)  	



  	$scope.createHang = function(emails) {

  		// $scope.users = emails.split(',');


  	}


  });
