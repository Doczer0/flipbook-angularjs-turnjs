'use strict';

/**
 * @ngdoc function
 * @name bookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookApp
 */
angular.module('bookApp')
  .controller('MainCtrl', function ($scope, booksService) {
    booksService.books().get(function(data) {
      $scope.books = data;
    }, function(err) {
      console.log('error in get books');
    });
  });
