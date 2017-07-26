import { Component } from '@angular/core';
import { smoothlyMenu } from '../../app.helpers';
declare var jQuery: any;

@Component({
  selector: 'topnavbar',
  templateUrl: './topnavbar.template.html',
  styles: [ require('./topnavbar.component.less') ]
})
export class TopNavbarComponent {
  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    jQuery(".chevron").toggleClass("chevron-right");
    smoothlyMenu();
  }
}
