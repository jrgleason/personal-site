import { ElementRef, Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'my-app',
  template: String(require('./app.template'))
})
export class AppComponent implements AfterViewInit{
  constructor(public el:ElementRef){}
  ngAfterViewInit() {
    window['$'](this.el.nativeElement)['terminal'](function(command, term) {
        term.echo(command);
      }, {
        greetings: 'Welcome to Alice',
        name: 'js_demo',
        prompt: 'js> '
      }
    );
  }
}
