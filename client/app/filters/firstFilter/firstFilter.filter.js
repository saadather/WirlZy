'use strict';

angular.module('wirlZyApp')
  .filter('firstFilter', function () {
    return function (input) {
      return 'firstFilter filter: ' + input;
    };
  });
