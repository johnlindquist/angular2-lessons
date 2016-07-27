import {Home} from "./home/home";
import {provideRouter} from "@angular/router";
const routes = [
    {path: '', component: Home}
];

export const APP_ROUTES = [
    provideRouter(routes)
];