import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ContactsComponent} from "./contacts.component";
import contactsRoutes from "./contacts.routes";
import {ContactComponent} from "./contact.component";
import {HttpModule} from "@angular/http";
@NgModule({
    imports:[CommonModule, contactsRoutes, HttpModule],
    declarations: [ContactsComponent, ContactComponent]
})
export default class ContactsModule{}