import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SoilsampleService {

  isLogin() {
  }
  changeMessage(arg0: string) {
  }

  constructor(private httpClient: HttpClient, private router: Router) { }

  private apiURL = "http://localhost:8080/v1/api/sample3";

  addData(test3: any){
    return this.httpClient.post(this.apiURL+"/add", test3)
  }

  updateData(test3: any){
    return this.httpClient.put(this.apiURL+"/update", test3)
  }

  getAll(){
    return this.httpClient.get(this.apiURL);
  }

  getByID(id4: any){
    return this.httpClient.get(this.apiURL+ "/" + id4);
  }

  deleteByID(id4: any){
    return this.httpClient.delete(this.apiURL+ "/" + id4);
  }

  search(startDate: any, endDate:any){
    return this.httpClient.get(this.apiURL + "/search?startDate="+startDate + "&endDate=" + endDate);
  }
  //http://localhost:8080/v1/api/sample3/search?startDate=2023-01-01&endDate=2024-05-05

}
