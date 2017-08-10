import { Component, OnDestroy, OnInit, } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.template.html',
  styles: [ require('./register.component.less') ]
})
export class RegisterComponent implements OnDestroy, OnInit  {
  public constructor() { };

  public ngOnInit(): any { };

  public ngOnDestroy(): any { };
}
