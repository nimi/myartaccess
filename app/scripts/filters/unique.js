'use strict';

angular.module('myApp')

  .filter('unique', ['$parse', function($parse) {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var uniqueItems = [],
        get = angular.isString(filterOn) ? $parse(filterOn) : function (item) { return item; };

      var extractValueToCompare = function (item) {
        return angular.isObject(item) ? get(item) : item;
      };

      angular.forEach(items, function (item) {
        var isDuplicate = false;

        for (var i = 0; i < uniqueItems.length; i++) {
          if (angular.equals(extractValueToCompare(uniqueItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          uniqueItems.push(item);
        }

      });
      items = uniqueItems;
    }
    return items;
  };
}]);