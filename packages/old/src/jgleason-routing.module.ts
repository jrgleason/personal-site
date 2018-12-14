import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TerminalComponent} from "./terminal/terminal.component";
import {HeaderComponent} from "./layout/header/header.component";
import {LoginComponent} from "./authentication/login/login.component";
import {CanActivateIfLoggedIn} from "./authentication/canActivateIfLoggedId.guard";
import {LoginService} from "./authentication/authentication.service";
const JGleasonRoutes = [
    {
        path: "",
        component: HeaderComponent,
        outlet: "header",
    },
    {
        path: "terminal",
        component: TerminalComponent,
        canActivate: [CanActivateIfLoggedIn],
    },
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "login",
        component: LoginComponent,

    },
];
@NgModule({
    imports: [RouterModule.forRoot(JGleasonRoutes)],
    exports: [
        RouterModule,
    ],
    providers: [
        CanActivateIfLoggedIn,
        LoginService,
    ],
})
export class JGleasonRoutingModule {}

