import { Component, OnInit } from '@angular/core';
import { WatersampleService } from 'src/app/service/watersample.service';
import { Router } from '@angular/router';
import { test } from 'src/app/model/test';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.scss']
})
export class SampleListComponent  implements OnInit {
test: any;

  constructor(public watersampleservice: WatersampleService, private router : Router) { }
  
  watersample : any;

  ngOnInit(): void {
    this.watersampleservice.isLogin();
    this.getAll();
  }

  delete(id2: any) {

    if(confirm("Data Deleted")) {
      this.watersampleservice.deleteByID(id2).subscribe((val: any) => {
        this.getAll();
      })
    }

  }

  edit(_t14: test) { }

  sampleList: test[] = [];

  getAll() {
    this.watersampleservice.getAll().subscribe((res: any) => {
      this.sampleList = res;
    })
  }

  newMessage() {
    this.watersampleservice.changeMessage("New Message")
  }

  isLogin() {
    let login = localStorage.getItem("isLogin");
    if (login !== "true") {
      this.router.navigateByUrl('/login');
    }
  }

}
