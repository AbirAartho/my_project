import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public apiService: AuthService, private router : Router) { }
  
  authApi: any;
  

  ngOnInit(): void {
    this.apiService.isLogin();
    this.getAll();
  }

  delete(id: any) {
    if(confirm("Data Deleted")) {
      this.apiService.deleteByID(id).subscribe((val: any) => {
        this.getAll();
      })
    }
  }

  edit(_t14: User) { }

  userList: User[] = [];

  getAll() {
    this.apiService.getAll().subscribe((res: any) => {
      this.userList = res;
    })
  }

  newMessage() {
    this.apiService.changeMessage("New Message")
  }




  // medi = "";
  // catag="";
  // getBycat() {
  //   this.productList = [];
  //   let productList2: Products[] = []
  //   this.restApi.getAll().subscribe((val: any) => {
  //     productList2 = val; 
  //     productList2.forEach(product => {
  //       if (this.catag === product.cat) {
  //         this.productList.push(product);
  //       }
  //     })
  //   })
  // }
  // getBymed() {
  //   this.productList = [];
  //   let productList2: Products[] = []
  //   this.restApi.getAll().subscribe((val: any) => {
  //     productList2 = val;
  //     productList2.forEach(product => {
  //       if (this.medi === product.med) {
  //         this.productList.push(product);
  //       }
  //     })
  //   })
  // }

}
