import {Component, Input} from "@angular/core";
@Component({
    selector: 'widget-one',
    template: `
<h2>One's message:</h2>
<h3>{{message}}</h3>
`
})
export class WidgetOne{
    @Input() message;
}