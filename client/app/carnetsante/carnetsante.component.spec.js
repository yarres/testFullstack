'use strict';

describe('Component: CarnetsanteComponent', function() {
  // load the controller's module
  beforeEach(module('testFrontApp.carnetsante'));

  var CarnetsanteComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CarnetsanteComponent = $componentController('carnetsante', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
