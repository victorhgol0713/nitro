import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import {StarterViewComponent} from "./starterview.component";
import {LoginComponent} from "./login.component";

import {PeityModule } from '../charts/peity';
import {SparklineModule } from '../charts/sparkline';

@NgModule({
  declarations: [
    StarterViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PeityModule,
    SparklineModule
  ],
  exports: [
    StarterViewComponent,
    LoginComponent
  ],
})

export class AppviewsModule {
}
