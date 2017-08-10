import { Component, OnDestroy, OnInit, } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.template.html',
  styles: [ require('./register.component.less') ]
})
export class RegisterComponent implements OnDestroy, OnInit  {
  public constructor(public user: UserService) { };

  public ngOnInit(): any { };

  public ngOnDestroy(): any { };
}
