import {Component, trigger, state, style, transition, animate, keyframes} from "@angular/core";
@Component({
    selector: 'app',
    animations:[
        trigger('signal', [
            state('void', style({
                'transform':'translateY(-100%)'
            })),
            state('go', style({
                'background-color':'green',
                'height':'100px'
            })),
            state('stop', style({
                'background-color':'red',
                'height':'50px'
            })),
            transition('void => *', animate(8000, keyframes([
                style({'transform':'scale(0)'}),
                style({'transform':'scale(.1)'}),
                style({'transform':'scale(.9)'}),
                style({'transform':'scale(1)'})
            ]))),
            transition('* => *', animate('2s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
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
    class="traffic-light"
    *ngIf="isHere"
    >
    
</div>
<button (click)="onGoClick()">Go</button>
<button (click)="onStopClick()">Stop</button>
<hr>
<button (click)="onToggleClick()">Toggle</button>
`
})
export class AppComponent {
    signal;
    isHere = false;

    onGoClick(){
        this.signal = 'go';
    }

    onStopClick(){
        this.signal = 'stop';
    }

    onToggleClick(){
        this.isHere = !this.isHere;
    }
}