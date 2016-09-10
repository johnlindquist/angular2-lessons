import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import homeRoutes from "./home.routes";

@NgModule({
    imports:[CommonModule, homeRoutes],
    declarations: [HomeComponent]
})
export default class HomeModule{}