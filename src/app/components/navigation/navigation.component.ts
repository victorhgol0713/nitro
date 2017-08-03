import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import 'jquery-slimscroll';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

declare var jQuery: any;

@Component({
  selector: 'navigation',
  templateUrl: './navigation.template.html',
  styles: [ require('./navigation.component.less') ]
})

export class NavigationComponent implements OnInit {
  constructor(private router: Router, public auth: AuthService, public user: UserService) { };

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.user.data = JSON.parse(localStorage['user_data']);
    }
  };

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();

    if (jQuery("body").hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      });
    }
  }

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }
}
