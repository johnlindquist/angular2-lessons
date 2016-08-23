import {BrowserModule} from "@angular/platform-browser";
import {AppComponent, TotalService, TotalValidator} from "./app.component";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [AppComponent, TotalValidator],
    bootstrap: [AppComponent],
    providers:[TotalService]
})
export class AppModule {
}