import {Completed} from "./completed.component";
import {RouterModule} from "@angular/router";
export const completedRoutes = RouterModule.forChild([
    {path: '', component: Completed}
]);

export const completedComponents = [Completed];