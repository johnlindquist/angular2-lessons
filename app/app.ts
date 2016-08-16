import {Component} from "@angular/core";

@Component({
    selector: 'app',
    template: `
<h1>{{message}}</h1>
<input type="text" [(ngModel)]="message">
`
})
export class App {
    message = `Hello, world!`
}
