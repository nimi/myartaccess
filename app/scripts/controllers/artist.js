'use strict';

angular.module('myApp')
  .controller('ArtistCtrl', function ($scope, Dase) {

    Dase.get().then(
      function (data) {
        $scope.artworks = data;
      },
      function (error) {
        $scope.error = error;
      });

    $scope.artworks = Dase;

    $scope.formatName = function(name) {
      return name.split(', ').reverse().join(' ');
    };

  });
