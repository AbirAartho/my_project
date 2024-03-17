import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { test2 } from 'src/app/model/test2';
import { AirsampleService } from 'src/app/service/airsample.service';

@Component({
  selector: 'app-sample2-list',
  templateUrl: './sample2-list.component.html',
  styleUrls: ['./sample2-list.component.scss']
})
export class Sample2ListComponent implements OnInit {
  test2: any;
  
    constructor(public airsampleservice: AirsampleService, private router : Router) { }
    
    airsample : any;
  
    ngOnInit(): void {
      this.airsampleservice.isLogin();
      this.getAll();
    }
  
    delete(id3: any) {
  
      if(confirm("Data Deleted")) {
        this.airsampleservice.deleteByID(id3).subscribe((val: any) => {
          this.getAll();
        })
      }
  
    }
  
    edit(_t14: test2) { }
  
    sampleList: test2[] = [];
  
    getAll() {
      this.airsampleservice.getAll().subscribe((res: any) => {
        this.sampleList = res;
      })
    }
  
    newMessage() {
      this.airsampleservice.changeMessage("New Message")
    }
  
    isLogin() {
      let login = localStorage.getItem("isLogin");
      if (login !== "true") {
        this.router.navigateByUrl('/login');
      }
    }

}
