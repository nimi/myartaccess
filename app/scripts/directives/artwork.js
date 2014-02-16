'use strict';

angular.module('myApp')

  /**
   * Artwork container for browse views
   */
  .directive('artwork', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: {imglink:'@'},
      template: '<div class="artwork-background" style="background-image:url(https://dase.laits.utexas.edu{{imglink}})">' +
                '<div ng-transclude></div>' +
                '</div>'
    };
  });