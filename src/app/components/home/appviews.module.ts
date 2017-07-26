import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import {HomeComponent} from "./home.component";

import {PeityModule } from '../charts/peity';
import {SparklineModule } from '../charts/sparkline';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PeityModule,
    SparklineModule
  ],
  exports: [
    HomeComponent
  ],
})

export class AppviewsModule {
}
