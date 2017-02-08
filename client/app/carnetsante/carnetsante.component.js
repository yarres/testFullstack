'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './carnetsante.routes';

export class CarnetsanteComponent {
  /*@ngInject*/
  constructor($http) {
    this.message = 'Hello';
    this.$http = $http;
  //  this.title = 'CARNET_SANTE';
  }
  viewStrings = [];
  events = [];

  $onInit() {
    this.viewStrings.title = 'CARNET_SANTE';
    // Should come from an api call or from db via server

    // Call to api rest
    this.$http.get('https://google.com')
    .then(data => console.log(data), err => console.log(err));

    this.viewStrings.advice = [
      {
        title: 'ADVICE_TITLE_1',
        type: 'CARNET_SANTE',
      },
      {
        title: 'ADVICE_TITLE_2',
        type: 'CARNET_SANTE',
      }
    ];

    // Get the events via http and api
    this.events = [
      {
        title: 'Appointment with dr No',
        type: 'Teeth',
        contact: 'No contact',
        description: 'No more pain in my tooth.',
        date: new Date('2017-01-01 11:00:00')
      },
      {
        title: 'Checkup with Dr Z',
        type: 'Eyes',
        contact: 'No contact',
        description: 'No problems',
        date: new Date('2017-01-01 11:00:00')
      },
    ];
  }


} // End class

// Register the module to angular with the given name
export default angular.module('testFrontApp.carnetsante', [uiRouter])
  .config(routes)
  .component('carnetsante', {
    template: require('./carnetsante.pug'),
    controller: CarnetsanteComponent,
    controllerAs: 'carnetsanteCtrl'
  })
  .name;
