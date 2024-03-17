import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { test2 } from 'src/app/model/test2';
import { AirsampleService } from 'src/app/service/airsample.service';

@Component({
  selector: 'app-sample2-edit',
  templateUrl: './sample2-edit.component.html',
  styleUrls: ['./sample2-edit.component.scss']
})
export class Sample2EditComponent implements OnInit {

  constructor(private airsampleservice: AirsampleService,
    private router: Router,
    private route: ActivatedRoute) { }

  doAction($event: MouseEvent) {
  }

  ngOnInit(): void {
    this.id3 = this.route.snapshot.params['test2Id3'];
    this.getDataById(this.id3);
  }
  
  id3!: any;
  testData!: test2;

  getDataById(id3: any) {
    this.airsampleservice.getByID(id3).subscribe((v: any) => {
      this.testData = v;
      this.sampleForm2.setValue(this.testData);
    })
  }

  onSubmit() {
    this.sampleForm2.value.id3 = this.id3
    this.airsampleservice.updateData(this.sampleForm2.value).subscribe((res: any) => {
      this.router.navigateByUrl('/list3');
    })
  }

  sampleForm2: FormGroup = new FormGroup({
    id3 : new FormControl(),
    inputDate: new FormControl(),
    inputDay: new FormControl(),
    inputTime: new FormControl(),
    inputLocation: new FormControl(''),
    inputCO2: new FormControl(''),
    inputTemperature: new FormControl(''),
    inputHumidity: new FormControl(''),
    inputSO2: new FormControl(''),
    inputNOx: new FormControl(''),
    inputPM: new FormControl(''),
    inputAirVelocity: new FormControl('')
  });

}
