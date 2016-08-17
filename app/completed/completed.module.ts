import {NgModule} from "@angular/core";
import {completedRoutes, completedComponents} from "./completed.routes";
import {CommonModule} from "@angular/common";
import TodoModule from "../shared/todo.module";

@NgModule({
    imports: [
        CommonModule,
        TodoModule,
        completedRoutes
    ],
    declarations: [completedComponents]
})
export default class CompletedModule {
}