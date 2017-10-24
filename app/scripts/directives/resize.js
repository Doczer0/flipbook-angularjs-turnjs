'use strict';

/**
 * @ngdoc directive
 * @name bookApp.directive:resize
 * @description
 * # resize
 */
angular.module('bookApp')
  .directive('resize', function ($window) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.onResizeFunction = function() {
          scope.windowHeight = $window.innerHeight;
          scope.windowWidth = $window.innerWidth;
          console.log(scope.windowHeight);
          console.log(scope.windowWidth);
          $(element).turn('size', scope.windowWidth + 'px', scope.windowWidth + 'px');
        };
         angular.element($window).bind('resize', function() {
         scope.onResizeFunction();
         scope.$apply();
        });
      }
    };
  });
