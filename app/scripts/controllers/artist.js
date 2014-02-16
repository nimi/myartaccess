'use strict';

angular.module('myApp')
  .controller('ArtistCtrl', function ($scope, Dase) {

    $scope.imagelink = '';

    Dase.get().then(
      function (data) {
        $scope.artworks = data.items;
      },
      function (error) {
        $scope.error = error;
      });

    $scope.formatName = function(name) {
      return name.split(', ').reverse().join(' ');
    };

  });
