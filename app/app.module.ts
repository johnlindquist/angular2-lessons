import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import appRoutes from "./app.routes";

@NgModule({
    imports:[BrowserModule, appRoutes],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}
