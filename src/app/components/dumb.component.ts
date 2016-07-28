import {Component, Input, ViewChild, Renderer, ViewContainerRef, ComponentResolver} from "@angular/core";

@Component({
    selector: 'simple',
    template: `Simple Component`
})
class SimpleComponent{}


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
        <h2>Above</h2>
        <div #putStuffHere></div>
        <h2>Below</h2>
`
})
export class Dumb {
    @ViewChild('putStuffHere', {read: ViewContainerRef}) putStuffHere;

    constructor(private resolver:ComponentResolver) {
    }

    ngAfterViewInit() {
        this.resolver.resolveComponent(SimpleComponent)
            .then(factory => this.putStuffHere.createComponent(factory))
    }
}