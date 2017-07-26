import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {Dashboard1Component} from "./dashboard1.component";
import {Dashboard2Component} from "./dashboard2.component";
import {Dashboard3Component} from "./dashboard3.component";
import {Dashboard4Component} from "./dashboard4.component";
import {Dashboard41Component} from "./dashboard41.component";
import {Dashboard5Component} from "./dashboard5.component";

// Chart.js Angular 2 Directive by Valor Software (npm)
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FlotModule } from '../charts/flotChart';
import { IboxtoolsModule } from '../iboxtools/iboxtools.module';
import { PeityModule } from '../charts/peity';
import { SparklineModule } from '../charts/sparkline';
import { JVectorMapModule } from '../map/jvectorMap';


@NgModule({
  declarations: [Dashboard1Component, Dashboard2Component, Dashboard3Component, Dashboard4Component, Dashboard41Component, Dashboard5Component],
  imports     : [BrowserModule, ChartsModule, FlotModule, IboxtoolsModule, PeityModule, SparklineModule, JVectorMapModule],
  exports     : [Dashboard1Component, Dashboard2Component, Dashboard3Component, Dashboard4Component, Dashboard41Component, Dashboard5Component],
})

export class DashboardsModule {}
