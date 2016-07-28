import {Component} from "@angular/core";
import {Simple} from "../services/simple.service";

@Component({
    selector: 'smart',
    template: `
    {{simple.message}}
`
})
export class Smart{
    constructor(private simple:Simple){}
}

