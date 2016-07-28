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
    <h2>I'm the dumb component</h2>
    <div>{{message}}</div>
    <ng-content select="[footer]"></ng-content>    
    <ng-content select="[header]"></ng-content>    
`
})
export class Dumb{
    @Input() message;
}