import {Component} from "@angular/core";
import {SimpleService} from "../services/services.module";
@Component({
    selector: 'home',
    template: `
<div>I'm a Home component</div>
<widget-one></widget-one>
<widget-two></widget-two>
`
})
export class HomeComponent{
    constructor(private simpleService:SimpleService){}
}