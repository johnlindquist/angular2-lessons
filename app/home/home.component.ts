import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {WidgetThree} from "../widgets/widget-three.component";
@Component({
    selector: 'home',
    template: `
<div #container></div>
`
})
export class HomeComponent{
    @ViewChild('container', {read:ViewContainerRef}) container;

    constructor(private resolver:ComponentFactoryResolver){}

    ngAfterContentInit(){
        const widgetFactory = this.resolver
            .resolveComponentFactory(WidgetThree);

        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        const widgetRef = this.container
            .createComponent(widgetFactory);

        widgetRef.instance.message = "I'm last!";
    }
}