import {Component} from "@angular/core";
@Component({
    selector: 'app',
    template: `
<input 
    type="text" 
    value="Hello World"
    ngModel
    #message="ngModel"
    >
{{message.value}}
`
})
export class AppComponent {
}