import {Component} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";
@Component({
    selector: 'app',
    template: `
<form [formGroup]="loginForm" (ngSubmit)="onLogIn(loginForm.value)">
    <label><input type="text" formControlName="username"></label>
    <label><input type="password" formControlName="password"></label>
    <button type="submit">Submit</button>
</form>
`
})
export class AppComponent {
    onLogIn(formValue){
        console.log(formValue);
    }

    loginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });

    ngOnInit(){
        this.loginForm.setValue({username: 'john', password: 'password'});
    }

    ngAfterViewInit(){
        this.loginForm.valueChanges.subscribe(v => console.log(v));
    }
}