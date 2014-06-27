'use strict';

angular.module('personalsiteAngularApp')
  .controller('HangtimeCtrl', function ($scope, $http) {





  	// Array of events
  	$scope.events = [
  		{
  			starttime: '9:30',
  			endtime: '10:00',
  			status: 'empty'
  		},
      {
        starttime: '10:00',
        endtime: '10:30',
        status: 'empty'
      },
      {
        starttime: '10:30',
        endtime: '11:00',
        status: 'empty'
      },
      {
        starttime: '11:00',
        endtime: '10:30',
        status: 'empty'
      }

  	];


  	console.log($scope.events);
  });
