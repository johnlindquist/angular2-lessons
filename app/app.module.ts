import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {HomeModule} from "./home/home.module";
@NgModule({
    imports:[BrowserModule, HomeModule],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}
