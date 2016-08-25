import {Component} from "@angular/core";
@Component({
    selector: 'app',
    styles:[`
.ng-invalid{
    border: 3px solid red;
}
`],
    template: `
<input 
    type="text" 
    value="Hello World"
    ngModel
    #message="ngModel"
    required
    >
{{message.value}}
<hr>
{{message.valid | json}}
`
})
export class AppComponent {
}