import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello World</h1>
    <input [(ngModel)]="message">
    {{message}}
  `
})
export class AppComponent { }