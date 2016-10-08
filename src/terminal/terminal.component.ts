import { ElementRef, Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'my-app',
  template: String(require('./terminal.template')),
  styles: [String(require('!raw!stylus-loader!./terminal.styles.styl'))],
})
export class TerminalComponent implements AfterViewInit{
  constructor(public el:ElementRef){}
  ngAfterViewInit() {
    window['$'](this.el.nativeElement).children(":first")['terminal'](function(command, term) {
        term.echo(function(){
          return command
        }, {
          raw: true
        });
      }, {
        greetings: 'Welcome to Alice',
        name: 'js_demo',
        prompt: 'js> '
      }
    );
  }
}
