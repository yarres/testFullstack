'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';


import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import carnetSante from './carnetsante/carnetsante.component';
import modalForm from './components/modalForm/modalForm.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import './app.scss';

angular.module('testFrontApp', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap, navbar,
  footer, main, carnetSante, constants, util, modalForm
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['testFrontApp'], {
      strictDi: true
    });
  });
