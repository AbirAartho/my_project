import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WatersampleService {
  isLogin() {
  }
  changeMessage(arg0: string) {
  }

  constructor(private httpClient: HttpClient, private router: Router) { }

  private apiURL = "http://localhost:8080/api/sample";

  addData(test: any){
    return this.httpClient.post(this.apiURL+"/add", test)
  }

  updateData(test: any){
    return this.httpClient.put(this.apiURL+"/update", test)
  }

  getAll(){
    return this.httpClient.get(this.apiURL);
  }

  getByID(id2: any){
    return this.httpClient.get(this.apiURL+ "/" + id2);
  }

  deleteByID(id2: any){
    return this.httpClient.delete(this.apiURL+ "/" + id2);
  }

  search(startDate: any, endDate:any){
    return this.httpClient.get(this.apiURL + "/search?startDate="+startDate + "&endDate=" + endDate);
  }
}
