import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { VerificationComponent } from './verification/verification.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PropertiesComponent } from './properties/properties.component';
import { BlogComponent } from './blog/blog.component';
import { ActivitiesComponent } from './activities/activities.component';


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'ForgotPassword', component: ForgotPasswordComponent },
  { path: 'Verification', component: VerificationComponent },
  { path: 'ResetPassword', component: ResetPasswordComponent },
  { path: 'HomePage', component: HomePageComponent },
  { path: 'Properties', component: PropertiesComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'Activities', component: ActivitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
