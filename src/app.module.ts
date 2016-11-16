import { NgModule }      from '@angular/core';
import { TerminalComponent }   from './terminal/terminal.component';
import { BrowserModule } from '@angular/platform-browser';
import {ViewportComponent} from "./viewport/viewport.component";

@NgModule({
  declarations: [ TerminalComponent, ViewportComponent ],
  bootstrap:    [ ViewportComponent ],
  imports:      [ BrowserModule ]
})
export class AppModule { }

