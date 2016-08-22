import {Component} from "@angular/core";
@Component({
    selector: 'app',
    template: `
    <input required type="text" 
    [(ngModel)]="username"
    #usernameRef="ngModel"
    >
    {{usernameRef.valid}}
`
})
export class AppComponent {
    username = "John";
}