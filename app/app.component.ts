import {Component, Directive} from "@angular/core";

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
    required
    >
</form>
{{f.value | json}} 
<hr> 
{{f.valid | json}}
`
})
export class AppComponent {
}