import {Component, ViewChild} from "@angular/core";

@Component({
    selector: 'app',
    template: `
<form>
    <h2>Both fields combined need to be > 10</h2>
    <input type="number" name="a" [(ngModel)]="a">
    <input type="number" name="b" [(ngModel)]="b">
    <input 
        type="hidden" 
        name="total" 
        #total="ngModel"
        [ngModel]="a + b"
        >
    <hr>        
    A is {{a}}, B is {{b}}, so combined they are <h3>{{total.valid ? 'valid' : 'invalid'}}</h3>
</form>
`
})
export class AppComponent {
    a = 3;
    b = 4;

    @ViewChild('total') total;

    ngAfterViewInit(){
        this.total.control.setValidators([
           control => control.value <= 10
                   ? {valid: false}
                   : null
        ]);
    }
}