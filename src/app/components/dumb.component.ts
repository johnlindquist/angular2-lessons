import {Component, Input, ViewChild, Renderer} from "@angular/core";
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
    <input #input type="text">
    <h2>I'm the dumb component</h2>
    <div>{{message}}</div>
    <ng-content select="[footer]"></ng-content>    
    <ng-content select="[header]"></ng-content>    
`
})
export class Dumb{
    @Input() message;

    @ViewChild('input') input;

    constructor(private renderer:Renderer){}

    ngOnInit(){
        console.log(this.message);
    }

    ngAfterViewInit(){
        this.renderer.invokeElementMethod(
            this.input.nativeElement,
            'focus',
            []
        )
    }

    ngOnDestroy(){
        console.log('clean up your mess');
    }
}