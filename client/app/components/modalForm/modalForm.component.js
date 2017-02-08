'use strict';
import angular from 'angular';

export class modalFormComponent {
  /**
   * Inject the scope, the modal and the log modules
   */
  /*@ngInject*/
  constructor($scope, $uibModal, $log) {
    this.$scope = $scope;
    this.$uibModal = $uibModal;
    this.$log = $log;
  }  
} // End class

export default angular.module('testFullstackApp.modalForm', [])
  .component('modalForm', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: modalFormComponent
  })
  .name;
