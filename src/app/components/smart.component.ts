import {Component} from "@angular/core";
import {Simple} from "../services/simple.service";
import {Dumb} from "./dumb.component";

@Component({
    selector: 'smart',
    directives: [Dumb],
    template: `
    {{simple.message}}
    <hr>
    <dumb [message]="'whatever'"></dumb>
`
})
export class Smart{
    constructor(private simple:Simple){}
}

