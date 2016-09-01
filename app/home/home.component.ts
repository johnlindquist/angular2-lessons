import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {WidgetThree} from "../widgets/widget-three.component";
@Component({
    selector: 'home',
    template: `
<div #container></div>
`
})
export class HomeComponent{
    @ViewChild('container', {read: ViewContainerRef}) container:ViewContainerRef;

    constructor(private resolver:ComponentFactoryResolver){}

    ngAfterViewInit(){
        this.container.createComponent(this.resolver.resolveComponentFactory(WidgetThree));
    }
}