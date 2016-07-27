import {Component, trigger, state, style, transition, animate} from "@angular/core";

@Component({
  selector: 'app',

  animations: [
    trigger('signal', [
      state('go', style({
        'background-color': 'green'
      })),
      state('slow', style({
        'background-color': 'yellow'
      })),
      state('stop', style({
        'background-color': 'red'
      })),
      transition('go => slow', animate('.1s')),
      transition('slow => stop', animate('1s'))
    ])
  ],
  styles: [`
    .light{
      width: 100px;
      height: 100px;
      background-color: green;
    }
`],
  template: `
<div
  class="light"
  @signal="signal"
  (click)="update()"
  ></div>
  {{signal}}
`
})
export class App {
  signal = "go";

  update() {
    this.signal = this.updateSignal(this.signal);
  }

  updateSignal(signal){
    switch(signal){
      case "go":
        return "slow";
      case "slow":
        return "stop";
      case "stop":
        return "go";
      default:
        return "go";
    }
  }

}
