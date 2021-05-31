import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';

  use = [];

  constructor(private _service: RegistrationService, private _router: Router) { }


  ngOnInit(): void {
  }
  loginUser(): any {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log('response received');
        console.log(data);

        this._router.navigate(['/loginsuccess']);
      },
      error => {
        console.log('exception occured');
        this.msg = 'user not exist';
      }
    );
  }
  gotoregistration(): any {
    this._router.navigate(['/registration']);
  }
}
