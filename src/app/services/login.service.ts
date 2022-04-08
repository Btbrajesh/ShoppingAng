import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }

  login(userName:string,password:string){
    let remeberMe = true;
  return  this.http.post(`${environment.apiUrl}Account/Login`,{userName,password,remeberMe});
  }
}
