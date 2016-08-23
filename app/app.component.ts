import {Component, ViewChild} from "@angular/core";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
    selector: 'app',
    template: `
<form>
    <h2>Both fields combined need to be > 10</h2>
    <input type="number" #a="ngModel" name="a" ngModel="4">
    <input type="number" #b="ngModel" name="b" ngModel="3">
     
    <h3>A: {{a.value}} is valid? {{a.valid | json}}</h3>
    <h3>B: {{b.value}} is valid? {{b.valid | json}}</h3>
</form>
`
})
export class AppComponent {

    @ViewChild('a') a;
    @ViewChild('b') b;

    ngAfterViewInit(){
        const customValidator = ()=> {
            const total = parseInt(this.a.control.value) + parseInt(this.b.control.value);
            return total > 10
                ? null
                : {valid:false};
        };


        this.b.control.setValidators([customValidator]);

        this.a.control.setValidators([customValidator]);

        //combine these as needed :)
        this.a.control.statusChanges
            .distinctUntilChanged()
            .subscribe(v => this.b.control.updateValueAndValidity())

        this.b.control.statusChanges
            .distinctUntilChanged()
            .subscribe(v => this.a.control.updateValueAndValidity())
    }
}