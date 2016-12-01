import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TerminalComponent} from "./terminal/terminal.component";
const JGleasonRoutes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "",
                component: TerminalComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(JGleasonRoutes)],
    exports: [RouterModule]
})
export class JGleasonRoutingModule{ }

