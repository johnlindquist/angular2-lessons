import {Injectable} from "@angular/core";
import {LoginService} from "../../login.service";
import 'rxjs/add/operator/take';
@Injectable()
export class ContactGuard{
    constructor(private loginService:LoginService){}

    canActivate(){
        return this.loginService.login$.take(1);
    }
}