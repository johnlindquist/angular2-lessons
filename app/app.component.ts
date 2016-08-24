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
    <select name="location" [ngModel]="locations[0]">
        <option 
            *ngFor="let location of locations"
            [value]="location">
            
            {{location}}
            
        </option>
    </select>
</form> 
{{formRef.value | json}}   
<hr>
Valid: {{formRef.valid | json}}   
   
`
})
export class AppComponent {
    locations = ["Home", "Away", "Space", "Ocean", "Stars"];
}