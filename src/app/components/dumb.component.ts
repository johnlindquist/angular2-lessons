import {Component, ViewChild, Renderer} from "@angular/core";

@Component({
    selector: 'dumb',
    styles:[`
      :host{
        font-family: Arial,serif;
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
export class Dumb{

    @ViewChild('putStuffHere') putStuffHere;

    constructor(public renderer:Renderer){}

    ngAfterViewInit(){
        const div = this.renderer.createElement(this.putStuffHere.nativeElement, 'div', null);
        this.renderer.setElementProperty(div, 'innerText', 'Wow');
        const input = this.renderer.createElement(div, 'input', null);
        this.renderer.setElementProperty(input, 'value', 'neat');

    }
}
