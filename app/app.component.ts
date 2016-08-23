import {Component, ViewChild, ViewChildren, QueryList} from "@angular/core";
import "rxjs/add/operator/distinctUntilChanged";
import {NgModel, NgModelGroup, FormBuilder, FormControl, FormGroup, FormArray} from "@angular/forms";

@Component({
    selector: 'app',
    template: `<form (ngSubmit)="null" [formGroup]="form">
    <div formArrayName="people">
        <fieldset *ngFor="let group of people.controls; let i = index" [formGroupName]="i">
            <input type="text" formControlName="a">
            <input type="text" formControlName="b">
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

        this.form = fb.group({
            people: this.people
        })
    }

    add() {
        this.people.push(this.fb.group(
            {
                a: '',
                b: ''
            }
        ));
    }

    ngAfterViewInit(){
        this.form.valueChanges.subscribe(v => console.log(v));
    }
}