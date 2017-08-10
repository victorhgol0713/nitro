import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {BsDropdownModule} from 'ngx-bootstrap';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';

// App views
import {DashboardsModule} from "./components/dashboards/dashboards.module";
import {HomeComponent} from "./components/home/home.component";

import {PeityModule } from './components/charts/peity';
import {SparklineModule } from './components/charts/sparkline';

// App modules/components
import {BasicLayoutComponent} from "./components/layouts/basicLayout.component";
import {BlankLayoutComponent} from "./components/layouts/blankLayout.component";
import {TopNavigationLayoutComponent} from "./components/layouts/topNavigationLayout.component";

import {NavigationComponent} from "./components/navigation/navigation.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TopNavbarComponent} from "./components/topnavbar/topnavbar.component";
import {TopNavigationNavbarComponent} from "./components/topnavbar/topnavigationnavbar.component";
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './components/localization/imports';

import {LoginComponent} from "./components/login/login.component";
import {AboutComponent} from "./components/about/about.component";
import {RegisterComponent} from "./components/register/register.component";

/**
 * services
 * */
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    TranslatePipe,
    FooterComponent,
    BasicLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent,
    TopNavigationLayoutComponent,
    TopNavbarComponent,
    TopNavigationNavbarComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardsModule,
    RouterModule.forRoot(ROUTES),
    BsDropdownModule.forRoot(),
    PeityModule,
    SparklineModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    TRANSLATION_PROVIDERS,
    TranslateService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
