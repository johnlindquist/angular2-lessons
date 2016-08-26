import {Component} from "@angular/core";
@Component({
    selector: 'app',
    styles:[`
.ng-valid{
    border: 3px solid green;
}

.ng-invalid{
    border: 3px solid red;
}
`],
    template: `
<input 
    type="text" 
    [ngModel]="myMessage"
    #message="ngModel"
    required
    >
{{message.value}}
<hr>
{{message.valid | json}}
`
})
export class AppComponent {
    myMessage = "A wonderful message";
}