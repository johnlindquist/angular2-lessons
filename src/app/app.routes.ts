import {Home} from "./home/home";
import {provideRouter} from "@angular/router";
import {Contacts} from "./contacts/contacts";
import {Contact} from "./contact/contact";
const routes = [
    {path: '', component: Home},
    {path: 'contacts', component: Contacts},
    {path: 'contacts/:id', component: Contact}
];

export const APP_ROUTES = [
    provideRouter(routes)
];