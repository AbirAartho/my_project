import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { qa } from 'src/app/model/qa';
import { QaService } from 'src/app/service/qa.service';

@Component({
  selector: 'app-answersheet-list',
  templateUrl: './answersheet-list.component.html',
  styleUrls: ['./answersheet-list.component.scss']
})
export class AnswersheetListComponent implements OnInit {

  constructor(public qaservice: QaService, private router : Router) { }
  
  qa: any;
  

  ngOnInit(): void {
    this.qaservice.isLogin();
    this.getAll();
  }

  delete(id: any) {
    if(confirm("Data Deleted")) {
      this.qaservice.deleteByID(id).subscribe((val: any) => {
        this.getAll();
      })
    }
  }

  edit(_t14: qa) { }

  qalist: qa[] = [];

  getAll() {
    this.qaservice.getAll().subscribe((res: any) => {
      this.qalist = res;
    })
  }

  newMessage() {
    this.qaservice.changeMessage("New Message")
  }

}
