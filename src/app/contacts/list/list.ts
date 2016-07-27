import {Component, Inject} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {ROUTER_DIRECTIVES} from "@angular/router";
@Component({
    selector: 'contacts',
    directives:[ROUTER_DIRECTIVES],
    template: `
<div *ngFor="let contact of contacts$ | async">
    <a [routerLink]="[contact.id]">{{contact.name}}</a>
</div>
`
})
export class ContactsList{
    contacts$;
    constructor(http:Http, @Inject('API')API){
        this.contacts$ = http.get(`${API}/people`)
            .map(res => res.json())
    }
}