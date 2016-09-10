import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import appRoutes from "./app.routes";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
    imports:[BrowserModule, appRoutes],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}
