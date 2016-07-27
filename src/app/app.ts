import {Component} from "@angular/core";

@Component({
    selector: 'app',
    template: `<form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
  <input type="text" name="username" ngModel>
  <input type="password" name="password" ngModel>
  
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
