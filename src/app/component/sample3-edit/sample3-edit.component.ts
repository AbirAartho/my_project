import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { test3 } from 'src/app/model/test3';
import { SoilsampleService } from 'src/app/service/soilsample.service';

@Component({
  selector: 'app-sample3-edit',
  templateUrl: './sample3-edit.component.html',
  styleUrls: ['./sample3-edit.component.scss']
})
export class Sample3EditComponent implements OnInit {

  constructor(private soilsampleservice: SoilsampleService,
    private router: Router,
    private route: ActivatedRoute) { }

  doAction($event: MouseEvent) {
  }

  ngOnInit(): void {
    this.id4 = this.route.snapshot.params['test3Id4'];
    this.getDataById(this.id4);
  }
  
  id4!: any;
  testData!: test3;

  getDataById(id4: any) {
    this.soilsampleservice.getByID(id4).subscribe((v: any) => {
      this.testData = v;
      this.sampleForm3.setValue(this.testData);
    })
  }

  onSubmit() {
    this.soilsampleservice.updateData(this.sampleForm3.value).subscribe((res: any) => {
      this.router.navigateByUrl('/list4');
    })
  }

  sampleForm3: FormGroup = new FormGroup({
    id4 : new FormControl(),
    inputDate: new FormControl(),
    inputDay: new FormControl(),
    inputTime: new FormControl(),
    inputLocation: new FormControl(''),
    inputP: new FormControl(''),
    inputS: new FormControl(''),
    inputZn: new FormControl(''),
    inputFe: new FormControl(''),
    inputMn: new FormControl(''),
    inputCu: new FormControl(''),
    inputK: new FormControl(''),
    inputCa: new FormControl(''),
    inputMg: new FormControl(''),
    inputNa: new FormControl(''),
    inputOM: new FormControl(''),
    inputCEC: new FormControl(''),
    inputpH: new FormControl('')
  });

}
