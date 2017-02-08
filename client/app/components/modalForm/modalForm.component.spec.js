'use strict';

describe('Component: modalForm', function() {
  // load the component's module
  beforeEach(module('testFullstackApp.modalForm'));

  var modalFormComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    modalFormComponent = $componentController('modalForm', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
