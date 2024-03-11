import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserDetailFormComponent } from './user-detail-form/user-detail-form.component';
import { HomePageComponent } from './home-page/home-page.component';

import { LoginComponent } from './login/login.component';
import { VerificationComponent } from './verification/verification.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PropertiesComponent } from './properties/properties.component';
import { BlogComponent } from './blog/blog.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,

    ForgotPasswordComponent,
    UserDetailFormComponent,
    HomePageComponent,
 
    LoginComponent,
    VerificationComponent,
    ResetPasswordComponent,
    PropertiesComponent,
    BlogComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
