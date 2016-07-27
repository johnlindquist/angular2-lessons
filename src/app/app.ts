import {Component, trigger, state, style, transition, animate} from "@angular/core";

@Component({
    selector: 'app',
    animations: [
        trigger('signal', [
            state('stop', style({
                'background-color': 'red'
            }))
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
        this.signal =
            this.signal == "go"
                ? "stop"
                : "go"
    }

}
