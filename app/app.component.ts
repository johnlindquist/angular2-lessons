import {Component} from "@angular/core";

@Component({
    selector: 'app',
    styles:[`
.ng-invalid + label:after{
    content: '<--Pick one!!!'
}
`],
    template: `
<form #formRef="ngForm">
    <div *ngFor="let location of locations">
        <input 
            [attr.id]="location"
            name="location"
            [ngModel]="locations[0]"
            [value]="location"
            type="radio"
            required
        >
        <label [attr.for]="location">{{location}}</label>
    </div>
</form> 
{{formRef.value | json}}   
<hr>
Valid: {{formRef.valid | json}}   
   
`
})
export class AppComponent {
    locations = ["Home", "Away", "Space", "Ocean", "Stars"];
}