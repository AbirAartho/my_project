import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QaService {

  isLogin() {
  }
  changeMessage(arg0: string) {
  }

  constructor(private httpClient: HttpClient, private router: Router) { }

  private apiURL = "http://localhost:8080/v1/api/sample3";

  addData(qa: any){
    return this.httpClient.post(this.apiURL+"/add", qa)
  }

  updateData(qa: any){
    return this.httpClient.put(this.apiURL+"/update", qa)
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
}
