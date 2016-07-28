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
    
        <h1 header>I'm a header</h1>
        <h2 footer>Footer</h2>
    </dumb>
`
})
export class Smart{
    onClick(){alert('hi')}

    constructor(private simple:Simple){}
}

