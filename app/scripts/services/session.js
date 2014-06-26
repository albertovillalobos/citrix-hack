'use strict';

angular.module('personalsiteAngularApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
