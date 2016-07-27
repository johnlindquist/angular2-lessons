import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
@Component({
    selector: 'contacts-index',
    directives: [ROUTER_DIRECTIVES],
    template:`
<h1>This is the Contacts Index</h1>
<router-outlet></router-outlet>
`
})
export class ContactsIndex{}