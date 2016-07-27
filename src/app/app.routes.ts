import {Home} from "./home/home";
import {provideRouter} from "@angular/router";
import {ContactsList} from "./contacts/list/list";
import {Contact} from "./contacts/contact/contact";
import {ContactsIndex} from "./contacts/contacts-index";
import {ContactGuard} from "./contacts/contact/contact-guard";
const routes = [
    {path: '', component: Home},
    {path: 'contacts', component: ContactsIndex, children:[
        {path: '', component: ContactsList},
        {path: ':id', component:Contact,
            canActivate:[ContactGuard],
            canDeactivate:[ContactGuard]
        }
    ]},
];

export const APP_ROUTES = [
    provideRouter(routes),
    ContactGuard
];