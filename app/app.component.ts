import {Component} from "@angular/core";
@Component({
    selector: 'app',
    styles: [`
.ng-valid{
    border: 3px solid green;
}

.ng-invalid{
    border: 3px solid red;
}
`],
    template: `
<form #f="ngForm">
<input
    type="text"
    name="message"
    ngModel    
    >
 </form>
{{f.value | json}}
`
})
export class AppComponent {
}