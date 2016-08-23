import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}