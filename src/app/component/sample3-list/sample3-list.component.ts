import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { test3 } from 'src/app/model/test3';
import { SoilsampleService } from 'src/app/service/soilsample.service';

@Component({
  selector: 'app-sample3-list',
  templateUrl: './sample3-list.component.html',
  styleUrls: ['./sample3-list.component.scss']
})
export class Sample3ListComponent implements OnInit {
  test3: any;
  
    constructor(public soilsampleservice: SoilsampleService, private router : Router) { }
    
    soilsample : any;
  
    ngOnInit(): void {
      this.soilsampleservice.isLogin();
      this.getAll();
      
    }
  
    delete(id4: any) {
  
      if(confirm("Data Deleted")) {
        this.soilsampleservice.deleteByID(id4).subscribe((val: any) => {
          this.getAll();
        })
      }
  
    }
  
    edit(_t14: test3) { }
  
    sampleList: test3[] = [];
  
    getAll() {
      this.soilsampleservice.getAll().subscribe((res: any) => {
        this.sampleList = res;
        console.log(res);
        
      })
    }
  
    newMessage() {
      this.soilsampleservice.changeMessage("New Message")
    }
  
    isLogin() {
      let login = localStorage.getItem("isLogin");
      if (login !== "true") {
        this.router.navigateByUrl('/login');
      }
    }

}
