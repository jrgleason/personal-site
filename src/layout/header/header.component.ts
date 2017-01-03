import {Component} from "@angular/core";
@Component({
    selector: "jg-header",
    template: require("./header.template"),
    styles: [ require("./header.styles") ],
})
export class HeaderComponent {
    public isCollapsed = true;
    public onClick = () => {
        console.log("Clicked");
        this.isCollapsed = !this.isCollapsed;
    }
}