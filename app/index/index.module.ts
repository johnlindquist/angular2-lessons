import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {indexRoutes, indexComponents} from "./index.routes";

@NgModule({
    imports:[
        CommonModule,
        indexRoutes
    ],
    declarations:[indexComponents]
})
export default class IndexModule{}