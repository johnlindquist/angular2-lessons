import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import { Http } from "@angular/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Component({
    template: `
<h2>{{(contact$ | async).name}}</h2>
<img [src]="(contact$ | async).image">
`
})
export class ContactComponent {
    contact$ = new BehaviorSubject({name: 'Loading...', image: ''});

    constructor(private route: ActivatedRoute, private http: Http) {
        const api = 'https://starwars-json-server-ewtdxbyfdz.now.sh/';

        route.params
            .map((p: any) => p.id)
            .switchMap(id => http.get(api + 'people/' + id)
                .map(res => res.json())
                .map(contact => Object.assign({}, contact, {image: api + contact.image}))
            )
            .subscribe(this.contact$);
    }
}