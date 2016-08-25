import {Component} from "@angular/core";
@Component({
    selector: 'app',
    template: `
<input 
    type="text" 
    value="Hello World"
    ngModel
    #message="ngModel"
    required
    >
{{message.value}}
<hr>
{{message.valid}}
`
})
export class AppComponent {
}