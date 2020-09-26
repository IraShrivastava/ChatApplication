import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import the components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
//import routing module and forms module
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import toastr
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //path for login component is already defined in app module so don't redeclare the path in child module
    RouterModule.forChild([
      { path: 'sign-up', component: SignupComponent }
    ])
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class UserModule { }
