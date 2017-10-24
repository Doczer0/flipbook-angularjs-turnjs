'use strict';

describe('Controller: FlipCtrl', function () {

  // load the controller's module
  beforeEach(module('bookApp'));

  var FlipCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlipCtrl = $controller('FlipCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FlipCtrl.awesomeThings.length).toBe(3);
  });
});
