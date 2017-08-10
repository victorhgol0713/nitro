import {Routes} from "@angular/router";

import {Dashboard1Component} from "./components/dashboards/dashboard1.component";
import {Dashboard2Component} from "./components/dashboards/dashboard2.component";
import {Dashboard3Component} from "./components/dashboards/dashboard3.component";
import {Dashboard4Component} from "./components/dashboards/dashboard4.component";
import {Dashboard41Component} from "./components/dashboards/dashboard41.component";
import {Dashboard5Component} from "./components/dashboards/dashboard5.component";

import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {AboutComponent} from "./components/about/about.component";
import {RegisterComponent} from "./components/register/register.component";

import {BlankLayoutComponent} from "./components/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/layouts/basicLayout.component";
import {TopNavigationLayoutComponent} from "./components/layouts/topNavigationLayout.component";

export const ROUTES: Routes = [
  // Main redirect
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  // App views
  {
    path: 'dashboards', component: BasicLayoutComponent,
    children: [
      {path: 'dashboard1', component: Dashboard1Component},
      {path: 'dashboard2', component: Dashboard2Component},
      {path: 'dashboard3', component: Dashboard3Component},
      {path: 'dashboard4', component: Dashboard4Component},
      {path: 'dashboard5', component: Dashboard5Component}
    ]
  },
  {
    path: 'dashboards', component: TopNavigationLayoutComponent,
    children: [
      {path: 'dashboard41', component: Dashboard41Component}
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },

  // Handle all other routes
  {path: '**',  redirectTo: 'home'}
];
