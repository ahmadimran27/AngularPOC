import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FoorterComponent } from './foorter/foorter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule,Routes} from '@angular/router';
import { ErrorComponent } from './error/error.component'
import { UserService } from './user.service';
import { AuthGuardGuard } from './auth-guard.guard';


const appRoutes:Routes = [
  {
    path:'',
    component:LoginFormComponent
  },
  {
    path:'dashboard',
    canActivate:[AuthGuardGuard],
    component:DashboardComponent
  },
  {
    path:'error',
    component:ErrorComponent
  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FoorterComponent,
    DashboardComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
