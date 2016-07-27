import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Injectable()
export class LoginService{
    login$ = new BehaviorSubject(false);
}