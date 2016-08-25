import {Component} from "@angular/core";
@Component({
    selector: 'app',
    template: `
<input 
    type="text" 
    value="Hello World"
    #message
    >
{{message.value}}
`
})
export class AppComponent {
}