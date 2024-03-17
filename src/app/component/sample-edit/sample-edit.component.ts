import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { test } from 'src/app/model/test';
import { WatersampleService } from 'src/app/service/watersample.service';

@Component({
  selector: 'app-sample-edit',
  templateUrl: './sample-edit.component.html',
  styleUrls: ['./sample-edit.component.scss']
})
export class SampleEditComponent implements OnInit {

  constructor(private watersampleservice: WatersampleService,
    private router: Router,
    private route: ActivatedRoute) { }

  doAction($event: MouseEvent) {
  }

  ngOnInit(): void {
    this.id2 = this.route.snapshot.params['testId2'];
    this.getDataById(this.id2);
  }
  
  id2!: any;
  testData!: test;

  getDataById(id2: any) {
    this.watersampleservice.getByID(id2).subscribe((v: any) => {
      this.testData = v;
      this.sampleForm.setValue(this.testData);
    })
  }

  onSubmit() {
    this.sampleForm.value.id2 = this.id2
    this.watersampleservice.updateData(this.sampleForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/list2');
    })
  }

  sampleForm: FormGroup = new FormGroup({
    id2 : new FormControl(),
    inputDate: new FormControl(),
    inputDay: new FormControl(),
    inputTime: new FormControl(),
    inputLocation: new FormControl(''),
    inputTurbidity: new FormControl(''),
    inputTemperature: new FormControl(''),
    inputColour: new FormControl(''),
    inputTasteAndOdour: new FormControl(''),
    inputSolids: new FormControl(''),
    inputEC: new FormControl(''),
    inputpH: new FormControl(''),
    inputChloride: new FormControl(''),
    inputChlorine: new FormControl(''),
    inputSulphate: new FormControl(''),
    inputNitrogen: new FormControl(''),
    inputFluoride: new FormControl(''),
    inputFe_Mn: new FormControl(''),
    inputCu_Zn: new FormControl(''),
    inputHardness: new FormControl(''),
    inputDO: new FormControl(''),
    inputBOD: new FormControl('')
  });

}
