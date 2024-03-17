import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  
  addData(user: any) {
    return this.httpClient.post(this.apiURL+"/add", user)
  }
  
  getByID(id: any) {
    return this.httpClient.get(this.apiURL+ "/" + id);
  }
  updateData(user: any) {
    return this.httpClient.put(this.apiURL+"/update"+ user.id, user)
  }
  deleteByID(id: any) {
    return this.httpClient.delete(this.apiURL+ "/" + id);
  }
  getAll() {
    return this.httpClient.get(this.apiURL);
  }

  private messageSource = new BehaviorSubject('false');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  private apiURL = "http://localhost:3500/posts";
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

}