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
  			name:'Liam Cardenas',
  			starttime: '7:30 pm',
        endtime: '9:30pm'
  		},
      {
        name:'Nick Brown',
        starttime: '7:30 pm',
        endtime: '9:30pm'
      },
      {
        name:'Brent Kirkland',
        starttime: '7:30 pm',
        endtime: '9:30pm'
      },
  	];


  	console.log($scope.events);
  });
