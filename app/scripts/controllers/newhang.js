'use strict';

angular.module('personalsiteAngularApp')
  .controller('NewhangCtrl', function ($scope, $http, $interval) {

  	$scope.potentialEvents = [];



  	$scope.createHang = function(emails) {

  		// $scope.users = emails.split(',');


  		$scope.potentialEvents = [
	  		{
	  			name:'Ask to Hang with Liam',
	  			starttime: '9:30',
	  			endtime: '10:00',
	  			status: 'potential'  			
	  		},
	  		{
	  			name:'Ask to Hang with Liam',
	  			starttime: '13:30',
	  			endtime: '15:00',
	  			status: 'potential'  			
	  		}	  			  		
  		];

  	}


  });
