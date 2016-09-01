import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {WidgetThree} from "../widgets/widget-three.component";
@Component({
    selector: 'home',
    template: `
<button (click)="onClick()">Create Template</button>
<div #container></div>

<template #template let-description="description">
    <h2>My {{description}} template</h2>
    <button>My {{description}} button</button>
</template>
`
})
export class HomeComponent{
    @ViewChild('container', {read:ViewContainerRef}) container;

    @ViewChild('template') template;

    widgetRef;

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

        this.widgetRef = this.container
            .createComponent(widgetFactory, 2);

        this.widgetRef.instance.message = "I'm third";
    }

    onClick(){
        this.container.createEmbeddedView(this.template, {
            description: 'sweet'
        });
    }
}