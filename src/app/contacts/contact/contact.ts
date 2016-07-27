import {Component, Inject} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
@Component({
    selector: 'contact',
    template: `
<div>{{(contact$ | async).name}}</div>
<div>{{(contact$ | async).image}}</div>
<img [src]="(contact$ | async).image" alt="">
`
})
export class Contact{
    contact$;
    constructor(private route:ActivatedRoute, http:Http, @Inject('API')API){
        this.contact$ = route.params
            .map((params:any)=> params.id)
            .switchMap(id => http.get(`${API}/people/${id}`)
                .map(res => res.json())
                .map(contact => Object.assign({}, contact, {image: `${API}/${contact.image}`}))
            )
            .startWith({name: 'Loading Contact...', image: ''})
    }
}