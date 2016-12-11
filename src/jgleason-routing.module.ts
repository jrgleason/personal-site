import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TerminalComponent} from "./terminal/terminal.component";
import {HeaderComponent} from "./layout/header/header.component";
const JGleasonRoutes = [
    {
        path: "",
        component: HeaderComponent,
        outlet: "header",
    },{
        path: "terminal",
        component: TerminalComponent
    },
    {
        path: "",
        component: HomeComponent,
    }
];
@NgModule({
    imports: [RouterModule.forRoot(JGleasonRoutes)],
    exports: [RouterModule]
})
export class JGleasonRoutingModule{ }

