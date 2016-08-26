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
<form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
<input
    type="text"
    name="message"
    ngModel
    minlength="3"
    >    
<button 
    type="submit"
    [disabled]="f.invalid || f.pristine"
    >
    Submit
</button>    
</form>
{{f.value | json}} 
<hr> 
{{f.valid | json}}
`
})
export class AppComponent {
    onSubmit(formValue){
        console.log(formValue);
    }
}