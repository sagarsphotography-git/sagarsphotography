import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../Api_Classes/users';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
singupApi="https://sagarsphotography.herokuapp.com/postregister";
singinApi="https://sagarsphotography.herokuapp.com/postlogin"
   postSingup(formData):Observable<Users[]>{
    return this.http.post<Users[]>(this.singupApi, formData)
  }
  postSingIn(formData):Observable<Users[]>{
    return this.http.post<Users[]>(this.singinApi,formData)
  }
}
