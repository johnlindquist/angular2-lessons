import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ContactsComponent} from "./contacts.component";
import contactsRoutes from "./contacts.routes";
@NgModule({
    imports:[CommonModule, contactsRoutes],
    declarations: [ContactsComponent]
})
export default class ContactsModule{}