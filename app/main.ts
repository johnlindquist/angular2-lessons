import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
@Component({
    selector:'app',
    template: `
<div>I'm the App Component</div>
`
})
export class AppComponent{}

@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);