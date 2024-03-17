import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { qa } from 'src/app/model/qa';
import { QaService } from 'src/app/service/qa.service';

@Component({
  selector: 'app-answersheet-edit',
  templateUrl: './answersheet-edit.component.html',
  styleUrls: ['./answersheet-edit.component.scss']
})
export class AnswersheetEditComponent implements OnInit {

  doAction($event: MouseEvent) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['qaId'];
    this.getDataById(this.id);
  }

  constructor(public qaservice: QaService,
    private router: Router,
    private route: ActivatedRoute) { }

  id!: any;
  qaData!: qa;

  getDataById(id: any) {
    this.qaservice.getByID(id).subscribe((v: any) => {
      this.qaData = v;
      this.qaForm.setValue(this.qaData);
    })
  }

  onSubmit() {
    this.qaservice.updateData(this.qaForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/qalist');
    })
  }



  qaForm: FormGroup = new FormGroup({
    id: new FormControl()
  });

}
