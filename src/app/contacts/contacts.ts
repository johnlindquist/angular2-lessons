import {Component} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
@Component({
    selector: 'contacts',
    template: `
<div *ngFor="let contact of contacts$ | async">
{{contact.name}}
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