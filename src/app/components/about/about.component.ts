import { Component, OnDestroy, OnInit, } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.template.html',
  styles: [ require('./about.component.less') ]
})
export class AboutComponent implements OnDestroy, OnInit  {
  public constructor() { };

  public ngOnInit(): any { };

  public ngOnDestroy(): any { };
}
