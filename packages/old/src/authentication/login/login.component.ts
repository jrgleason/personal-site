import {Component} from "@angular/core";
import {Credentials} from "./credentials";
import {LoginService} from "../authentication.service";
@Component({
    selector: "jg-login",
    template: require("./login.template"),
    styles: [require("./login.styles")],
})
export class LoginComponent {
    model = new Credentials("", "");
    constructor(private loginService: LoginService) {}
    onSubmit(event) {
        event.preventDefault();
        // this.loginService.;
    }
}