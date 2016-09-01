import {Component, ViewChild, Renderer, Input} from "@angular/core";
@Component({
    selector: 'widget-three',
    template: `
<input #input type="text" [value]="message">
`
})
export class WidgetThree{
    @ViewChild('input') input;

    @Input() message = "default value!";

    constructor(private renderer:Renderer){}

    ngAfterViewInit(){
        this.renderer.invokeElementMethod(
            this.input.nativeElement,
            'focus',
            []
        );
    }
}