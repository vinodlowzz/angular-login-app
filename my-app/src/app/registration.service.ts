import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>('http://localhost:8080/login', user);
  }
  public registerUserFromRemote(user: User): Observable<any>{
    return this._http.post<any>('http://localhost:8080/registeruser', user);
  }
  public deleteUser(id: number): Observable<any> {
    return this._http.delete<any>('http://localhost:8080/deleteuser/' + id);
  }
  public updateUsers(id: number, userToUpdate: any): Observable<any> {
    return this._http.put<any>('http://localhost:8080/update/' + id, userToUpdate);
  }
}
