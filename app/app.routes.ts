import {RouterModule} from "@angular/router";
import {Index} from "./index/index.component";
import {Active} from "./active/active.component";
import {Completed} from "./completed/completed.component";

export const routes = RouterModule.forRoot([
    {path: '', component: Index},
    {path: 'active', component: Active},
    {path: 'completed', component: Completed},
]);

export const routeComponents = [Index, Active, Completed];