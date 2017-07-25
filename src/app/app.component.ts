import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [ require('./app.component.less') ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
