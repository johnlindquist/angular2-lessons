import {Component, trigger, state, style, transition, animate, keyframes} from "@angular/core";
@Component({
    selector:'app',
    animations:[
        trigger('trafficLight', [
            state('stop', style({
                backgroundColor: 'red'
            })),
            state('slow', style({
                backgroundColor: 'yellow'
            })),
            state('go', style({
                backgroundColor: 'green'
            })),
            transition('* => *', animate(3000, keyframes([
                style({transform: 'translate(0px, 0px)'}),
                style({transform: 'translateX(100px)'}),
                style({transform: 'translateY(100px)'}),
                style({transform: 'translate(0px, 0px)'})

            ])))

        ])
    ],
    styles:[`
.traffic-light{
    width: 100px;
    height: 100px;
    background-color: green;
}
`],
    template: `
<div 
    class="traffic-light"
    [@trafficLight]="signal"
    (@trafficLight.start)="onStart($event)"
    (@trafficLight.done)="onDone($event)"
    >    
</div>
<button (click)="onStopClick()">Stop</button>
<button (click)="onSlowClick()">Slow</button>
<button (click)="onGoClick()">Go</button>
`
})
export class AppComponent{
    signal:'go'|'stop'|'slow' = 'go';

    onStopClick(){
        this.signal = 'stop';
    }

    onSlowClick(){
        this.signal = 'slow';
    }

    onGoClick(){
        this.signal = 'go';
    }

    onStart(foo){
        console.log(foo);
    }

    onDone(event){
        console.log(event);
    }
}