import {Active} from "./active.component";
import {RouterModule} from "@angular/router";
export const activeRoutes = RouterModule.forChild([
    {path: '', component: Active}
]);

export const activeComponents = [Active];