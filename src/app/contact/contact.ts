import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
@Component({
    selector: 'contact',
    template: `I'm a contact #{{id | async}}`
})
export class Contact{
    id;
    constructor(private route:ActivatedRoute){
        this.id = route.params.map((p:any) => p.id);
    }
}