import {Component, ViewChild, ViewContainerRef} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {QuestionService} from "./questions.service";

@Component({
    selector: 'app',
    template: `<form [formGroup]="form" (ngSubmit)="onSubmit(form.value)">
    <template #input
              let-name="name"
              let-type="type"
              let-value="value"
    >
        <input [formControlName]="name" [type]="type" [id]="name">
    </template>

    <template #dropdown
              let-name="name"
              let-options="options"
              let-value="value"
    >
        <select [formControlName]="name" [id]="name">
            <option *ngFor="let option of options" [value]="option.key">{{option.value}}</option>
        </select>
    </template>
    
    <div #controlsContainer></div>
    
    <button type="submit">Submit</button>
</form>

{{form.value | json}}
`
})
export class AppComponent {
    @ViewChild('controlsContainer', {read: ViewContainerRef}) controlsContainerRef: ViewContainerRef;
    @ViewChild('input') input;
    @ViewChild('dropdown') dropdown;

    form: FormGroup = new FormGroup({});

    constructor(private qService: QuestionService) {
    }

    onSubmit(formValue) {
        console.log(formValue);
    }

    ngAfterContentInit() {
        this.qService.questions
            .sort((a, b)=> a.order - b.order)
            .forEach(q => {
                const {template, name, type, options, value, required} = q;

                const validators = required ? [Validators.required] : [];

                this.form.addControl(name, new FormControl(value, validators));
                this.controlsContainerRef.createEmbeddedView(this[template], {
                    name,
                    type,
                    value,
                    options
                });
            });

        this.form.valueChanges.subscribe(v => console.log(v));
    }
}