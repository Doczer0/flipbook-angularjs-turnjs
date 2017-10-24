'use strict';

describe('Directive: flipbook', function () {

  // load the directive's module
  beforeEach(module('bookApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<flipbook></flipbook>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the flipbook directive');
  }));
});
