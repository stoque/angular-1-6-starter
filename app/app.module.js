import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { AppComponent } from './app.component';
import { HelloModule } from './components/hello/hello.module';

angular
  .module('app', [
    uiRouter,
    HelloModule
  ])
  .component('app', AppComponent)
  .name