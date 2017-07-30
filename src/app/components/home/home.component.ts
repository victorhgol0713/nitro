import { Component, OnDestroy, OnInit, } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'home',
  templateUrl: './home.template.html',
  styles: [ require('./home.component.less') ]
})
export class HomeComponent implements OnDestroy, OnInit  {
  public nav: any;
  public constructor() {
    this.nav = document.querySelector('nav.navbar');
  };

  public ngOnInit(): any {
    this.nav.className += " white-bg";

    jQuery('.slick_demo_2').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  };

  public ngOnDestroy(): any {
    this.nav.classList.remove("white-bg");
  };
}
