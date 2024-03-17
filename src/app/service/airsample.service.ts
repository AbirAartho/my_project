import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AirsampleService {
  
  isLogin() {
  }
  changeMessage(arg0: string) {
  }

  constructor(private httpClient: HttpClient, private router: Router) { }

  private apiURL = "http://localhost:8080/v1/api/sample2";

  addData(test2: any){
    return this.httpClient.post(this.apiURL+"/add", test2)
  }

  updateData(test2: any){
    return this.httpClient.put(this.apiURL+"/update", test2)
  }

  getAll(){
    return this.httpClient.get(this.apiURL);
  }

  getByID(id3: any){
    return this.httpClient.get(this.apiURL+ "/" + id3);
  }

  deleteByID(id3: any){
    return this.httpClient.delete(this.apiURL+ "/" + id3);
  }

  search(startDate: any, endDate:any){
    return this.httpClient.get(this.apiURL + "/search?startDate="+startDate + "&endDate=" + endDate);
  }
}
