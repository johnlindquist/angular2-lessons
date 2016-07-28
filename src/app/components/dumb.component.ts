import {Component, Input} from "@angular/core";
@Component({
    selector: 'dumb',
    template: `{{message}}`
})
export class Dumb{
    @Input() message;
}