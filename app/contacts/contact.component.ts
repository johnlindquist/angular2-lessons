import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/map";
@Component({
    template:`
contact {{id | async}}
`
})
export class ContactComponent{
    id;

    constructor(private route:ActivatedRoute){
        this.id = route.params.map((p:any) => p.id);
    }
}