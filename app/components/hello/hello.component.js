import templateUrl from './hello.html';

export const HelloComponent = {
  template: templateUrl,
  controller: class HelloComponent {
    constructor() {
      console.log(this);
    }
  }
}