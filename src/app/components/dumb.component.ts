import {Component, Input} from "@angular/core";
@Component({
    selector: 'dumb',
    styles:[`
        :host{
            font-family: Arial;
            display: block;
            border: 3px solid black;
        }
`],
    template: `
    <ng-content></ng-content>
    <h2>I'm the dumb component</h2>
    {{message}}
    
`
})
export class Dumb{
    @Input() message;
}