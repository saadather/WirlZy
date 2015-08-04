'use strict';

describe('Service: firstService', function () {

  // load the service's module
  beforeEach(module('wirlZyApp'));

  // instantiate service
  var firstService;
  beforeEach(inject(function (_firstService_) {
    firstService = _firstService_;
  }));

  it('should do something', function () {
    expect(!!firstService).toBe(true);
  });

});
