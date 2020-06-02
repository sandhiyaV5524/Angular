import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';





const appRoutes:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'signup',
    component:  SignupComponent
  },
  {
    path: 'about',
    component:  AboutComponent
  },
  
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'coursedetails',
    component:  CoursedetailsComponent
  },
  { path: 'logout', component: LogoutComponent }
]


@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginFormComponent, FooterComponent, DashboardComponent, HomeComponent, SignupComponent, AboutComponent, LogoutComponent, CoursedetailsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
 
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
