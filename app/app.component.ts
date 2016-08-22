import {Component, ViewChild} from "@angular/core";
@Component({
    selector: 'app',
    template: `
<form 
    #formRef="ngForm" 
    (ngSubmit)="onSubmit(formRef.value)"
    >
    <fieldset ngModelGroup="login">
        <input 
            #usernameRef="ngModel"
            name="username"
            [(ngModel)]="username"
            type="text"        
            required
            minlength="3"
        >    
        <div *ngIf="usernameRef.errors?.required">This field is required</div>
        <div *ngIf="usernameRef.errors?.minlength">This field must be longer than {{usernameRef.errors?.minlength.requiredLength}} characters. You only typed {{usernameRef.errors?.minlength.actualLength}}</div>
        
        <input type="password" ngModel name="password">
    </fieldset>
    <button type="submit">Submit</button>
</form> 
{{formRef.value | json}}   
{{formRef.valid | json}}   
   
`
})
export class AppComponent {
    username = "John";

    onSubmit(formValue){
        console.log(formValue);
    }
}