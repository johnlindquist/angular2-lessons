import {Component, ViewChild} from "@angular/core";

@Component({
    selector: 'app',
    template: `<form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
  <fieldset ngModelGroup="login">
    <input type="text" name="username" ngModel>
    <input type="password" name="password" ngModel>
  </fieldset>
  
  <button type="submit">Submit</button>

  <hr>
  {{f.value | json}}

</form>`
})
export class App {
    onSubmit(value) {
        console.log(value);
    }
}
