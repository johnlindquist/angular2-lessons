import {NgModule} from "@angular/core";
import {SimpleService} from "./simple.service";

@NgModule({})
export class ServicesModule{
    static forRoot(){
        return {
            ngModule: ServicesModule,
            providers: [SimpleService]
        }
    }
}

export {
    SimpleService
}