import {RouterModule} from "@angular/router";

export const routes = RouterModule.forRoot([
    {path: '', loadChildren: 'app/index/index.module'},
    {path: 'active', loadChildren: 'app/active/active.module'},
    {path: 'completed', loadChildren: 'app/completed/completed.module'},
]);