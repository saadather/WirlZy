'use strict';

describe('Directive: firstDirective', function () {

  // load the directive's module and view
  beforeEach(module('wirlZyApp'));
  beforeEach(module('app/directives/firstDirective/firstDirective.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<first-directive></first-directive>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the firstDirective directive');
  }));
});