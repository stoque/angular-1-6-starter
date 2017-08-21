import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { HelloModule } from './components/hello/hello.module';

angular
  .module('app', [
    uiRouter,
    HelloModule,
  ])
  .name