import {Component} from "@angular/core";
import {SimpleService} from "../services/services.module";
@Component({
    selector: 'home',
    template: `
<widget-three></widget-three>
`
})
export class HomeComponent{
    constructor(private simpleService:SimpleService){}
}