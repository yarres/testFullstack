'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('carnetsante', {
      url: '/carnetsante',
      template: '<carnetsante></carnetsante>',
    });
}
