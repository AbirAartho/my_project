import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QaService } from 'src/app/service/qa.service';

@Component({
  selector: 'app-answersheet',
  templateUrl: './answersheet.component.html',
  styleUrls: ['./answersheet.component.scss']
})
export class AnswersheetComponent implements OnInit {

  doAction($event: any) {
  console.log($event.target.value);
  this.qaForm.value.gridCheck += $event.target.value; 

}
  ngOnInit(): void {

  }

  constructor(public qaservice: QaService, private router: Router) { }

  qaForm: FormGroup = new FormGroup({
    id: new FormControl()
  });

  data!: any;

  onSubmit() {
    console.log(this.qaForm.value);
    
    this.qaservice.addData(this.qaForm.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/qalist');
    });
  }

  clear() {
    this.qaForm = new FormGroup({
      id: new FormControl()
    });
  }

  addNewData() {
    this.qaservice.addData(this.qaForm.value);
  }
}
