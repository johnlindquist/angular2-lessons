import {Component} from "@angular/core";

@Component({
    selector: 'app',
    styles:[`

input[type="radio"].ng-invalid + label:after{
    content: '<--- Pick one!'
}
`],
    template: `
<form 
    #formRef="ngForm" 
    (ngSubmit)="onSubmit(formRef.value)"
    >
    <fieldset ngModelGroup="vacation">
    
    <div *ngFor="let location of locations">        
        <input [attr.id]="location" required type="radio" [value]="location" name="location" ngModel>
        <label [attr.for]="location">{{location}}</label>
    </div>
   
    </fieldset>
    <button type="submit">Submit</button>
</form> 
{{formRef.value | json}}   
<hr>
Valid: {{formRef.valid | json}}   
   
`
})
export class AppComponent {
    locations = ["home", "away"];

    onSubmit(formValue){
        console.log(formValue);
    }
}