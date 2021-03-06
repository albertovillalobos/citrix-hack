'use strict';

angular.module('personalsiteAngularApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {

    $scope.username = "Alberto Villalobos";

    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'Settings',
      'link': '/settings'
    }];
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });