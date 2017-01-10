import { NgModule }      from "@angular/core";
import { TerminalComponent }   from "./terminal/terminal.component";
import { BrowserModule } from "@angular/platform-browser";
import {ViewportComponent} from "./viewport/viewport.component";
import {JGleasonRoutingModule} from "./jgleason-routing.module";
import {HomeComponent} from "./home/home.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HeaderComponent} from "./layout/header/header.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {LoginComponent} from "./authentication/login/login.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CollapseDirective, CollapseAreaDirective} from "./collapse/collapse.directive";

@NgModule( {
  declarations: [
      TerminalComponent,
      LoginComponent,
      ViewportComponent,
      HomeComponent,
      HeaderComponent,
      CollapseDirective,
      CollapseAreaDirective,
  ],
  bootstrap:    [ ViewportComponent ],
  imports:      [
      BrowserModule,
      HttpModule,
      FormsModule,
      NgbModule.forRoot(),
      JGleasonRoutingModule,
  ],
  providers: [
      {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
})
export class JGleasonModule { }

