import {Index} from "./index.component";
import {RouterModule} from "@angular/router";
export const indexRoutes = RouterModule.forChild([
    {path:'', component: Index}
]);

export const indexComponents = [Index];