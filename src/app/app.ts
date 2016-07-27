import {Component, ViewChild} from "@angular/core";
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'app',
    styles: [`
.ng-invalid{
  border: 2px solid red;
}
.ng-valid{
  border: 2px solid green;
}
`],
    template: `<form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
  <fieldset ngModelGroup="login">
    <input required type="text" name="username" [ngModel]="firstName">
    <input required minlength="3" type="password" name="password" ngModel>
  </fieldset>
  
  <fieldset ngModelGroup="vacation">
  <label>Start Date:<input type="date" name="start" ngModel></label>
  <label>End Date: <input type="date" name="end" ngModel></label>
  
  <label>Home<input type="radio" name="location" [ngModel]="location" value="home"></label>
  <label>Away<input type="radio" name="location" [ngModel]="location" value="away"></label>
</fieldset>
  
  <button type="submit">Submit</button>

  <hr>
  {{f.value | json}}
  <hr>
  {{f.valid}}


</form>`
})
export class App {
    @ViewChild('f') f;

    firstName = "John";
    location = "away";

    onSubmit(value) {
        console.log(value);
    }

    ngAfterViewInit() {
        this.f.valueChanges
            .debounceTime(2000)
            .subscribe(v => console.log(v));
    }
}
