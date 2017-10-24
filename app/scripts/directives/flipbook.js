'use strict';

/**
 * @ngdoc directive
 * @name bookApp.directive:flipbook
 * @description
 * # flipbook
 */
angular.module('bookApp')
  .directive('flipbook', function () {
    return{
    restrict: 'E',
    link: function(scope, element, attrs){
      $('#flipbook').turn({
        width: '100%',
        height: '100vh',
        autoCenter: true
      });
    },
    controller: function($scope){
      $scope.show_page = function(page){
        console.log("page", page)
        $('#flipbook').turn('page', page);
      }
     
    },
    templateUrl: "views/about.html"
  }
  });
