import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';

// const AUTH_API = 'http://localhost:8080/api/auth/';


// const AUTH_API_REG = 'http://localhost:8080/';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private apiURL = "http://localhost:8080/v1/api/staff";
  // private apiURL = "http://localhost:3500/auth";
  // private apiURL = "http://localhost:3000/auth";

  addData(user: any){
    return this.httpClient.post(this.apiURL+"/add", user)
  }

  updateData(user: any){
    return this.httpClient.put(this.apiURL+"/update", user)
  }

  getAll(){
    return this.httpClient.get(this.apiURL);
  }

  getByID(id: any){
    return this.httpClient.get(this.apiURL+ "/" + id);
  }

  deleteByID(id: any){
    return this.httpClient.delete(this.apiURL+ "/" + id);
  }

  isLogin() {
    let login = localStorage.getItem("isLogin");
    if (login !== "true") {
      this.router.navigateByUrl('/login');
    }
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  changeMessage(arg0: string) {
  }
}
