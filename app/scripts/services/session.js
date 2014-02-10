'use strict';

angular.module('myApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
