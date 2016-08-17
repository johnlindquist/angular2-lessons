import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {routes, routeComponents} from "./app.routes";
@NgModule({
    imports: [BrowserModule, routes],
    declarations: [AppComponent, routeComponents],
    bootstrap: [AppComponent]
})
export class AppModule {
}