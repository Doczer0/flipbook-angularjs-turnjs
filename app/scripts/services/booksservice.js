'use strict';

/**
 * @ngdoc service
 * @name maikeApp.maikeAPI
 * @description
 * # maikeAPI
 * Factory in the maikeApp.
 */
angular.module('bookApp').factory('booksService', function($resource) {
  var BaseUrl = 'http://localhost:4000/api/';
  return {
    books: function() {
      return $resource(BaseUrl + 'book', null, {
        'update': {
          method: 'PUT'
        }
      });
    }
  };
});
