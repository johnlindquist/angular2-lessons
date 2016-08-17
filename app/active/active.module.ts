import {NgModule} from "@angular/core";
import {activeRoutes, activeComponents} from "./active.routes";
import {CommonModule} from "@angular/common";
import TodoModule from "../shared/todo.module";

@NgModule({
    imports: [
        CommonModule,
        TodoModule,
        activeRoutes
    ],
    declarations: [activeComponents],
})
export default class ActiveModule {
}