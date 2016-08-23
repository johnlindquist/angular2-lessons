import {Component} from "@angular/core";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {FormBuilder, FormGroup, FormArray} from "@angular/forms";

@Component({
    selector: 'app',
    template: `<form (ngSubmit)="null" [formGroup]="form">
    <div formArrayName="people">
        <fieldset #group *ngFor="let group of people.controls; let i = index" [formGroupName]="i">
            {{people.controls[i].valid}}
            <label for="a"></label><input id="a" type="number" formControlName="a">
            <label for="b"></label><input id="b" type="number" formControlName="b">
        </fieldset>
    </div>
    <button (click)="add()">Add Group</button>
</form>
`
})
export class AppComponent {
    form: FormGroup;
    people: FormArray;

    constructor(private fb: FormBuilder) {
        this.people = fb.array([]);

        this.form = new FormGroup({
                people: this.people
            }
        );

        this.add();
        this.add();
    }

    add() {
        const validator = ()=> {
            const total = this.people.controls.reduce((acc, group:FormGroup)=>{
                const a = group.controls['a'].value;
                const b = group.controls['b'].value;

                return acc + parseInt(a) + parseInt(b);
            }, 0);

            return total > 24
                ? {valid: false}
                : null;
        };

        const formGroup = this.fb.group({a: 3, b:4});

        this.people.push(formGroup);
        this.people.controls.forEach(group => group.setValidators([validator]));
    }

    ngAfterViewInit() {
        this.people
            .valueChanges
            .map(()=> {
                const total = this.people.controls.reduce((acc, group:FormGroup)=>{
                    const a = group.controls['a'].value;
                    const b = group.controls['b'].value;

                    return acc + parseInt(a) + parseInt(b);
                }, 0);

                return total;
            })
            .distinctUntilChanged()
            .subscribe(total => {
                this.people.controls.forEach(control =>{
                    control.updateValueAndValidity();
                })
            });
    }
}