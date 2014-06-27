'use strict';

angular.module('personalsiteAngularApp')
  .controller('HangtimeCtrl', function ($scope, $http) {


    $scope.formData = {};


    $scope.updateUserTimes = function() {

      console.log($scope.formData);


    }





    function secondstotime(secs)
    {
        var t = new Date(1970,0,1);
        t.setSeconds(secs);
        var s = t.toTimeString().substr(0,5);
        if(secs > 86399)
          s = Math.floor((t - Date.parse("1/1/70")) / 3600000) + s.substr(2);
        return s;
    }

    function timetoseconds(time) {
      var hms = time;   // your input string
      var a = hms.split(':'); // split it at the colons

      // minutes are worth 60 seconds. Hours are worth 60 minutes.
      var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60; 

      console.log(seconds);      
    }

    $scope.times = {starter: secondstotime($scope.currentUser.starttime), ender: secondstotime($scope.currentUser.endtime)}
    console.log($scope.times);
    timetoseconds('11:00');

  });
