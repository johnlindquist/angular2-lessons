import {Component, trigger, state, style} from "@angular/core";
@Component({
    selector: 'app',
    animations:[
        trigger('signal', [
            state('go', style({
                'background-color':'green'
            })),
            state('stop', style({
                'background-color':'red'
            }))
        ])
    ],
    styles:[`
.traffic-light{
    width: 100px;
    height: 100px;
    background-color: black;
}
`],
    template: `
<div
    [@signal]="signal"
    class="traffic-light">
    
</div>
<button (click)="onGoClick()">Go</button>
`
})
export class AppComponent {
    signal = 'stop';

    onGoClick(){
        this.signal = 'go';
    }
}