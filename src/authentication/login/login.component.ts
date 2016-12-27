import {Component} from "@angular/core";
import {Credentials} from "./credentials";
import {LoginService} from "../authentication.service";
@Component({
    selector: "jg-login",
    template: require("./login.template"),
    styles: [require("./login.styles")]
})
export class LoginComponent{
    constructor(private loginService: LoginService){ }
    model = new Credentials("","");
    onSubmit(event) {
        event.preventDefault();
        this.loginService.login(this.model.username, this.model.password);
    }
}