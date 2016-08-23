import {Component} from "@angular/core";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/startWith";
import {FormBuilder, FormGroup, FormArray} from "@angular/forms";

@Component({
    selector: 'app',
    styles:[`
.ng-invalid{
    color: red;
}
`],
    template: `<form (ngSubmit)="null" [formGroup]="form">
    <h2 [ngClass]="{'ng-invalid': (total$ | async) > 23}">{{total$ | async}} should be < 24</h2>
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
    total$;

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

    totalValidator = ()=> {
        const total = this.people.controls.reduce((acc, group:FormGroup)=>{
            const a = group.controls['a'].value;
            const b = group.controls['b'].value;

            return acc + parseInt(a) + parseInt(b);
        }, 0);

        return total < 24
            ? null
            : {valid: false};
    };

    add() {
        const formGroup = this.fb.group({a: 3, b:4});

        this.people.push(formGroup);
        this.people.controls.forEach(group => group.setValidators([this.totalValidator]));
    }

    ngAfterViewInit() {
        this.total$ = this.people
            .valueChanges
            .startWith(0)
            .map(()=> {
                const total = this.people.controls.reduce((acc, group:FormGroup)=>{
                    const a = group.controls['a'].value;
                    const b = group.controls['b'].value;

                    return acc + parseInt(a) + parseInt(b);
                }, 0);

                return total;
            })
            .distinctUntilChanged();


         this.total$
            .subscribe(total => {
                this.people.controls.forEach(control =>{
                    control.updateValueAndValidity();
                })
            });
    }
}