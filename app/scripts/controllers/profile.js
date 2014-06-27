/* ==========================================================================


	Main page after logging in

	- Only show comfirmed or pending hangouts!
   
========================================================================== */




'use strict';

angular.module('personalsiteAngularApp')
  .controller('ProfileCtrl', function ($scope, $http) {



  	// Array of events
  	$scope.events = [
  		// {
  		// 	name:'',
  		// 	starttime: '7:00',
  		// 	endtime: '7:30',
  		// 	status: 'empty'
  		// },
  		// {
  		// 	name: 'work',
  		// 	starttime: '7:30',
  		// 	endtime: '9:30',
  		// 	status: 'busy'
  		// },
  		{
  			name:'Ask to Hang with Liam',
  			starttime: '9:30',
  			endtime: '10:00',
  			status: 'potential'  			
  		},
  		// {
  		// 	name: '',
  		// 	starttime: '10:00',
  		// 	endtime: '10:30',
  		// 	status: 'empty'
  		// },
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
