import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.scss']
})
export class LoginsuccessComponent implements OnInit {
  data: any = [];
  userToUpdate: any = [];

  constructor(private http: HttpClient, private _service: RegistrationService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): any{
    const url = 'http://localhost:8080/user';
    this.http.get(url).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }

  deleteuser(id: number): any {
    this._service.deleteUser(id).subscribe(
      (res) => {
        this.data.pop(id);
        console.log(this.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  edit(i: any): any {
    this.userToUpdate = i;
  }
  updateUser(): any {
    this._service.updateUsers(this.userToUpdate.id, this.userToUpdate).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
