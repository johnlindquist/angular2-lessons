import {Component, Directive, forwardRef} from "@angular/core";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/share";
import {
    FormBuilder, FormGroup, FormArray, NG_VALIDATORS, Validator, AbstractControl,
    FormControl
} from "@angular/forms";

export class TotalService {
    total = 0; //:)
}

export const TOTAL_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(()=> TotalValidator),
    multi: true
};

@Directive({
    selector: '[total][formControlName],[total][formControl],[total][ngModel]',
    providers: [TOTAL_VALIDATOR]
})
export class TotalValidator implements Validator {
    constructor(private totalService: TotalService) {
        console.log(totalService);
    }

    validate() {
        console.log(this.totalService.total)
        return this.totalService.total > 24
            ? {valid: false}
            : null;
    }
}


@Component({
    selector: 'app',
    styles: [`
.ng-invalid{
    color: red;
}
`],
    template: `<form (ngSubmit)="null" [formGroup]="form">
    <div formArrayName="people">
        <fieldset #group *ngFor="let group of people.controls; let i = index" [formGroupName]="i">
            {{people.controls[i].valid}}
            <label for="a"></label><input id="a" type="number" formControlName="a" total>
            <label for="b"></label><input id="b" type="number" formControlName="b" total>
        </fieldset>
    </div>
    <button (click)="add()">Add Group</button>
</form>
`
})
export class AppComponent {
    form: FormGroup;
    people: FormArray;

    constructor(private fb: FormBuilder, private totalService: TotalService) {
        this.people = fb.array([]);

        this.form = new FormGroup({
                people: this.people
            }
        );

        this.add();
        this.add();
    }

    add() {
        this.people.push(this.fb.group(
            {
                a: 3,
                b: 4
            }
        ));
    }

    ngAfterContentInit() {
        this.people
            .valueChanges
            .startWith(0)
            .map(()=> this.people.controls.reduce((acc, group: FormGroup)=> {
                const a = group.controls['a'].value;
                const b = group.controls['b'].value;

                return acc + parseInt(a) + parseInt(b);
            }, 0))
            .distinctUntilChanged()
            .subscribe(total => {
                    this.totalService.total = total;

                    this.people.controls.forEach((group: FormGroup) =>
                            Object.keys(group.controls).forEach(key =>
                                group.controls[key].updateValueAndValidity()
                            )

                    )
                }
            );
    }
}