import {Component} from "@angular/core";
@Component({
    selector: 'app',
    template: `
    <input type="text" [(ngModel)]="username">
`
})
export class AppComponent {
    username = "John";
}