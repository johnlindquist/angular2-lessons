import {Component} from "@angular/core";
@Component({
    selector:'app',
    template: `
<nav>
    <a routerLink="">Home</a>
    <a routerLink="contacts">Contacts</a>
</nav>
<router-outlet></router-outlet>
`
})
export class AppComponent{}