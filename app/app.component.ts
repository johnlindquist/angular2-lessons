import {Component} from "@angular/core";
@Component({
    selector: 'app',
    template: `
<input type="text" [(ngModel)]="message">
<div>{{message}}</div>
`
})
export class AppComponent {
    message = "Hello"
}