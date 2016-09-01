import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {WidgetModule} from "../widgets/widgets.module";
import {COMPILER_PROVIDERS} from "@angular/compiler";
import {WidgetThree} from "../widgets/widget-three.component";
@NgModule({
    imports:[WidgetModule],
    declarations:[HomeComponent],
    exports:[HomeComponent]
})
export class HomeModule{}