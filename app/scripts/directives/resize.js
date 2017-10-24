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
          var height = Math.round(scope.windowWidth / 1.38);
          var padded = Math.round(scope.windowHeight * 0.9);
          var width = scope.windowWidth;
          if(height > padded) {
            height = (height / 100) * 71.1;
            width = (width / 100) * 88;
          }
          $(element).turn('size', width + 'px', height + 'px');
        };
         angular.element($window).bind('resize', function() {
         scope.onResizeFunction();
         scope.$apply();
        });
      }
    };
  });
