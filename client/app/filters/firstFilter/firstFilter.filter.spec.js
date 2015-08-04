'use strict';

describe('Filter: firstFilter', function () {

  // load the filter's module
  beforeEach(module('wirlZyApp'));

  // initialize a new instance of the filter before each test
  var firstFilter;
  beforeEach(inject(function ($filter) {
    firstFilter = $filter('firstFilter');
  }));

  it('should return the input prefixed with "firstFilter filter:"', function () {
    var text = 'angularjs';
    expect(firstFilter(text)).toBe('firstFilter filter: ' + text);
  });

});
