import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import appRoutes from "./app.routes";
import {HomeComponent} from "./home/home.component";

@NgModule({
    imports:[BrowserModule, appRoutes],
    declarations:[AppComponent, HomeComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}
