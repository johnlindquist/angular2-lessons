import {Component} from "@angular/core";
import {SimpleService} from "../services/services.module";
@Component({
    selector: 'home',
    template: `
<widget-two>

<widget-one [message]="simpleService.message"></widget-one>

</widget-two>

<widget-two>
Some other content
</widget-two>

`
})
export class HomeComponent{
    constructor(private simpleService:SimpleService){}
}