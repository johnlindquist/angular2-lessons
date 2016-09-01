import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {WidgetThree} from "../widgets/widget-three.component";
@Component({
    selector: 'home',
    template: `
<button (click)="onClick()">Add Component</button>
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
            .createComponent(widgetFactory, 2);

        widgetRef.instance.message = "I'm third";
    }

    onClick(){
        const widgetFactory = this.resolver
            .resolveComponentFactory(WidgetThree);

        const widgetRef = this.container
            .createComponent(widgetFactory, 3);

        widgetRef.instance.message = "I'm fourth";
    }
}