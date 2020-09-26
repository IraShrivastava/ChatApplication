import { Component, OnInit, ViewContainerRef } from '@angular/core';
//import routing module
import { Router } from '@angular/router';
//import cookie module to store user login details
import { Cookie } from 'ng2-cookies/ng2-cookies';
//import the service to be used
import { AppService } from './../../app.service';
//import toastr module
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: any;
  public password: any;

  constructor(
    public appService: AppService,
    public router: Router,
    private toastr: ToastrManager,
    vcr: ViewContainerRef,
  ) {
  }

  ngOnInit() {
  }

  public goToSignUp: any = () => {
    this.router.navigate(['/sign-up']);
  } // end goToSignUp

  public signinFunction: any = () => {

    if (!this.email) {
      this.toastr.warningToastr('enter email')
    } else if (!this.password) {
      this.toastr.warningToastr('enter password')
    } else {
      let data = {
        email: this.email,
        password: this.password
      }
      this.appService.signinFunction(data)
        .subscribe((apiResponse) => {

          if (apiResponse.status === 200) {
            console.log(apiResponse)
            Cookie.set('authtoken', apiResponse.data.authToken);
            Cookie.set('senderId', apiResponse.data.userDetails.userId);
            Cookie.set('senderName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
            this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails)
            this.router.navigate(['/chat']);
          } else {
            this.toastr.errorToastr(apiResponse.message)
          }

        }, (err) => {
          this.toastr.errorToastr('some error occured')
        });

    } // end condition
  } // end signinFunction
}