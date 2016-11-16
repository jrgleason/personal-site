import { ElementRef, Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'jg-terminal',
  template: require('./terminal.template'),
  styles: [require('./terminal.styles')],
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
