import {Home} from "./home/home";
import {provideRouter} from "@angular/router";
import {Contacts} from "./contacts/contacts";
const routes = [
    {path: '', component: Home},
    {path: 'contacts', component: Contacts}
];

export const APP_ROUTES = [
    provideRouter(routes)
];