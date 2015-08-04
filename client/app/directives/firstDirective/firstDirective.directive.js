'use strict';

angular.module('wirlZyApp')
  .directive('firstDirective', function () {
    return {
      templateUrl: 'app/directives/firstDirective/firstDirective.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });