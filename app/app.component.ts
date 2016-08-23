import {Component, ViewChild} from "@angular/core";

@Component({
    selector: 'app',
    template: `
<form>

    <input type="number" name="a" [(ngModel)]="a">
    <input type="number" name="b" [(ngModel)]="b">
    <input 
        type="hidden" 
        name="total" 
        #total="ngModel"
        [ngModel]="a + b"
        >
    <hr>        
    A is {{a}}, B is {{b}}, so combined they are {{total.valid ? 'valid' : 'invalid'}}
</form>
`
})
export class AppComponent {
    @ViewChild('total') total;

    ngAfterViewInit(){
        this.total.control.setValidators([
           control => control.value > 10
                   ? {valid: false}
                   : null
        ]);
    }
}