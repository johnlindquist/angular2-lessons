import {Component} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {ROUTER_DIRECTIVES} from "@angular/router";
@Component({
    selector: 'contacts',
    directives:[ROUTER_DIRECTIVES],
    template: `
<div *ngFor="let contact of contacts$ | async">
    <a [routerLink]="['/contacts', contact.id]">{{contact.name}}</a>
</div>
`
})
export class Contacts{
    contacts$;
    constructor(http:Http){
        this.contacts$ = http.get(`https://starwars-json-server-aikiidixsl.now.sh/people`)
            .map(res => res.json())
    }
}