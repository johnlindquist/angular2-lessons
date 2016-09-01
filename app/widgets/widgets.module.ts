import {NgModule} from "@angular/core";
import {WidgetOne} from "./widget-one.component";
import {CommonModule} from "@angular/common";
import {WidgetTwo} from "./widget-two.component";
import {WidgetThree} from "./widget-three.component";
@NgModule({
    imports:[CommonModule],
    declarations:[WidgetOne, WidgetTwo, WidgetThree],
    entryComponents:[WidgetThree],
    exports:[WidgetOne, WidgetTwo, WidgetThree, CommonModule]
})
export class WidgetModule{}