import { NgModule }      from '@angular/core';
import { TerminalComponent }   from './terminal/terminal.component';
import { BrowserModule } from '@angular/platform-browser';
import {ViewportComponent} from "./viewport/viewport.component";
import {JGleasonRoutingModule} from "./jgleason-routing.module";
import {HomeComponent} from "./home/home.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HeaderComponent} from "./layout/header/header.component";

@NgModule({
  declarations: [
      TerminalComponent,
      ViewportComponent,
      HomeComponent,
      HeaderComponent
  ],
  bootstrap:    [ ViewportComponent ],
  imports:      [
      BrowserModule,
      JGleasonRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ]
})
export class JGleasonModule { }
