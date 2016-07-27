import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import "rxjs/add/operator/concat";
import "rxjs/add/operator/delay";
import "rxjs/add/observable/of";
@Injectable()
export class LoginService {
    login$ = new BehaviorSubject(false);
    loginTimeout$ = new BehaviorSubject(false);

    constructor() {
        const true$ = Observable.of(true);
        const false$ = Observable.of(false);

        const trueThenFalse$ = true$
            .concat(false$.delay(3000));

        const selectStream =
            bool => bool
                ? trueThenFalse$
                : false$;

        this.login$
            .switchMap(selectStream)
            .subscribe(this.loginTimeout$);
    }
}