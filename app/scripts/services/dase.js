'use strict';

angular.module('myApp')
  .factory('Dase', function ($rootScope, $http, $q) {
    var server = 'https://dase.laits.utexas.edu/search.json';
    return {
      get: function(){
        var deferred = new $q.defer();
        $http.jsonp(server+'?callback=JSON_CALLBACK&c=blanton')
          .success(function(resp) {
            deferred.resolve(resp);
          })
          .error(function() {
              console.log('ERROR: Could not get data.');
            });
        return deferred.promise;
      }
    };

  });
