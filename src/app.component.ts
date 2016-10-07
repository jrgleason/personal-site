import { ElementRef, Component, AfterViewInit, ViewChild } from '@angular/core';
@Component({
  selector: 'my-app',
  template: String(require('./app.component.html'))
  // template: String(require('./app.component.pug'))
})
export class AppComponent implements AfterViewInit{
  @ViewChild('main') el:ElementRef;
  ngAfterViewInit() {
    window['$'](this.el.nativeElement)['terminal'](function(command, term) {
        term.echo(command);
      }, {
        greetings: 'Javascript Interpreter',
        name: 'js_demo',
        height: 200,
        prompt: 'js> '
      }
    );
  }
}
