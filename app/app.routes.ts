import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {ContactsComponent} from "./contacts/contacts.component";
const routes = [
    {path: '', component:HomeComponent},
    {path: 'contacts', component:ContactsComponent}
];


export default RouterModule.forRoot(routes);
