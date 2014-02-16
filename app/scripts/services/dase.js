'use strict';

angular.module('myApp')
  .factory('Dase', function ($rootScope, $http, $q) {

    var url = 'https://dase.laits.utexas.edu/search.json?callback=JSON_CALLBACK';

    return {
      get: function(){
        var deferred = new $q.defer();
        $http.jsonp(url,
        {
          max: 100,
          //cache: true,
          params: {
            c: 'blanton'
          }
        })
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