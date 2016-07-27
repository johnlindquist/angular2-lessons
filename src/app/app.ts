import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: `
<!-- The address bar is for help viewing the URL in online demos-->
  <div class="address-bar">
  Online Demo Address Bar: <input     
    (keyup.enter)="onEnter($event.target.value)"
    [value]="router.url"
    >
  </div>
  <hr>
  <router-outlet></router-outlet>
  `
})
export class App {
    onEnter(url) {
        this.router.navigate([url]);
    }

    constructor(private router: Router) {
    }
}