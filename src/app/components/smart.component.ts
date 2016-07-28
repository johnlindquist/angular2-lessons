import {Component} from "@angular/core";
import {Simple} from "../services/simple.service";
import {Dumb} from "./dumb.component";

@Component({
    selector: 'smart',
    directives: [Dumb],
    template: `

    <dumb></dumb>
`
})
export class Smart{
    show = true;

    constructor(private simple:Simple){}
}

