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
  			status: 'comfirmed'  			
  		},
      {
        name:'Nick Brown',
        status: 'pending'
      },
      {
        name:'Brent Kirkland',
        status: 'pending'
      },
  	];


  	console.log($scope.events);
  });
