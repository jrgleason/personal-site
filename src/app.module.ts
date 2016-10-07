import { NgModule }      from '@angular/core';
import { TerminalComponent }   from './terminal/terminal.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ TerminalComponent ],
  bootstrap:    [ TerminalComponent ],
  imports:      [ BrowserModule ]
})
export class AppModule { }

