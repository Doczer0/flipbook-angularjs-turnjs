'use strict';

describe('Service: booksService', function () {

  // load the service's module
  beforeEach(module('bookApp'));

  // instantiate service
  var booksService;
  beforeEach(inject(function (_booksService_) {
    booksService = _booksService_;
  }));

  it('should do something', function () {
    expect(!!booksService).toBe(true);
  });

});
