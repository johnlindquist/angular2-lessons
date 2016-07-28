import {Component, Input, ViewChild, Renderer, ViewContainerRef, ComponentResolver} from "@angular/core";

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
        <template #myTemplate>
            <h2>My awesome content</h2>
        </template>

        <h3>Above</h3>
        <div #putStuffHere></div>
        <h3>Below</h3>
`
})
export class Dumb {
    @ViewChild('myTemplate') myTemplate;
    @ViewChild('putStuffHere', {read: ViewContainerRef}) putStuffHere;

    constructor(private resolver:ComponentResolver) {
    }

    ngAfterViewInit() {
        this.putStuffHere.createEmbeddedView(this.myTemplate);
    }
}