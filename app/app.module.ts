import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {routes} from "./app.routes";
import TodoModule from "./shared/todo.module";
@NgModule({
    imports: [BrowserModule, routes, TodoModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}