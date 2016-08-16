import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {App} from "./app";
import {FormsModule} from "@angular/forms";


@NgModule({
    imports:[BrowserModule, FormsModule],
    declarations:[App],
    bootstrap: [App]
})
class MainModule{}


platformBrowserDynamic().bootstrapModule(MainModule);