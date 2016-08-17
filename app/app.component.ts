import {Component} from "@angular/core";
@Component({
    selector: 'app',
    template: `
<nav>
<a routerLink="">All</a>
<a routerLink="active">Active</a>
<a routerLink="completed">Completed</a>
</nav>
<router-outlet></router-outlet>
`
})
export class AppComponent {
}