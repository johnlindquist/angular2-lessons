import {ContactsComponent} from "./contacts.component";
import {RouterModule} from "@angular/router";
const routes = [
    {path: '', component: ContactsComponent}
];

export default RouterModule.forChild(routes);