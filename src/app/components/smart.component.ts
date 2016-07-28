import {Component} from "@angular/core";
import {Simple} from "../services/simple.service";
import {Dumb} from "./dumb.component";

@Component({
    selector: 'smart',
    directives: [Dumb],
    template: `
    {{simple.message}}
    <hr>
    <dumb [message]="simple.message">
    <button (click)="onClick()">{{simple.message}}</button>
</dumb>
`
})
export class Smart{
    onClick(){alert('hi')}

    constructor(private simple:Simple){}
}

