import {Component} from "@angular/core";
import {LoginService} from "../../authentication/authentication.service";
@Component({
    selector: "jg-header",
    template: require("./header.template"),
    styles: [ require("./header.styles") ],
})
export class HeaderComponent {
    user;
    constructor(private authService: LoginService){
        console.log("test");
        authService.user.subscribe((user)=>{
            if(user){
                this.user = user;
            }
        });
    }
    public isCollapsed = true;
    public onClick = () => {
        console.log("Clicked");
        this.isCollapsed = !this.isCollapsed;
    }
}