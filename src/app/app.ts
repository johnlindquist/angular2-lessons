import {Component} from "@angular/core";
import {Smart} from "./components/smart.component";
import {Simple} from "./services/simple.service";

@Component({
    selector: 'app',
    directives: [Smart],
    providers: [Simple],
    template: `<smart></smart>`
})
export class App {}
