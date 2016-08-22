import {Component, ViewChild} from "@angular/core";
@Component({
    selector: 'app',
    template: `
    <input 
        type="text" 
        [(ngModel)]="username"
        #usernameRef="ngModel"
        required
        minlength="3"
    >    
    <div *ngIf="usernameRef.errors?.required">This field is required</div>
    <div *ngIf="usernameRef.errors?.minlength">This field must be longer than {{usernameRef.errors?.minlength.requiredLength}} characters. You only typed {{usernameRef.errors?.minlength.actualLength}}</div>
`
})
export class AppComponent {
    username = "John";
}