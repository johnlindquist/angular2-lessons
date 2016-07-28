import {Component, Input, ViewChild, Renderer, ViewContainerRef, ComponentResolver} from "@angular/core";

function componentBuilder(selector, template){
    @Component({
        selector, template
    })
    class SimpleComponent{}

    return SimpleComponent;
}

@Component({
    selector: 'dumb',
    styles: [`
        :host{
            font-family: Arial;
            display: block;
            border: 3px solid black;
        }
`],
    template: `
        <h3>Above</h3>
        <div #putStuffHere></div>
        <h3>Below</h3>
`
})
export class Dumb {
    @ViewChild('putStuffHere', {read: ViewContainerRef}) putStuffHere;

    constructor(private resolver:ComponentResolver) {
    }

    ngAfterViewInit() {
        this.resolver.resolveComponent(componentBuilder('whatever', `Wow, this is neat!`))
            .then(factory => this.putStuffHere.createComponent(factory));
    }
}