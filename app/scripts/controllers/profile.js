/* ==========================================================================


	Main page after logging in

	- Only show comfirmed or pending hangouts!
   
========================================================================== */




'use strict';

angular.module('personalsiteAngularApp')
  .controller('ProfileCtrl', function ($scope, $http) {




  	// Array of events
  	$scope.events = [

  		{
  			name:'Ask to Hang with Liam',
  			starttime: '9:30',
  			endtime: '10:00',
  			status: 'potential'  			
  		},
  		{
  			name: 'You are hanging out with Liam',
  			starttime: '10:30',
  			endtime: '11:30',
  			status: 'comfirmed'
  		},
  		// {
  		// 	name: '',
  		// 	starttime: '11:30',
  		// 	endtime:'24:00',
  		// 	status: 'empty'
  		// }
  	];


  	console.log($scope.events);
  });
