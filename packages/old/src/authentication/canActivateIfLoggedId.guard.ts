import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {LoginService} from "./authentication.service";
@Injectable()
export class CanActivateIfLoggedIn implements CanActivate {
    constructor(private logService: LoginService) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ) {
        return this.logService.loggedIn
    }
}