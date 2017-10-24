'use strict';

/**
 * @ngdoc directive
 * @name bookApp.directive:resize
 * @description
 * # resize
 */
angular.module('bookApp')
  .directive('resize', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.bind('resize', function(){
          $('#flipbook').turn('size', '10%', '10vh');
        });
      }
    };
  });
