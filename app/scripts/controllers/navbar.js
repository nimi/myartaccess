'use strict';

angular.module('myApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'Browse',
      'link': '/browse'
    }, {
      'title': 'About',
      'link': '/about'
    }, {
      'title': 'Contact',
      'link': '/contact'
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
