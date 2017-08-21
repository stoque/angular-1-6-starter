import angular from 'angular';

import { HelloComponent } from './hello.component';

export const HelloModule = angular
  .module('hello', [
  ])
  .component('hello', HelloComponent)
  .config(($stateProvider,  $urlRouterProvider) => {
    $stateProvider
    .state('hello', {
      url: '/',
      component: 'hello',
    })
    $urlRouterProvider.otherwise('/'); 
  })
  .name;