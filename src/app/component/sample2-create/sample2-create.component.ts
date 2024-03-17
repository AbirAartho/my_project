import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AirsampleService } from 'src/app/service/airsample.service';

@Component({
  selector: 'app-sample2-create',
  templateUrl: './sample2-create.component.html',
  styleUrls: ['./sample2-create.component.scss']
})
export class Sample2CreateComponent {
  constructor(public airsampleservice: AirsampleService , private router: Router) { }

  doAction($event: any) {
    console.log($event.target.value);
    this.sampleForm2.value.gridCheck += $event.target.value; 
  
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

  data!: any;

  onSubmit() {
    console.log(this.sampleForm2.value);
    
    this.airsampleservice.addData(this.sampleForm2.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/list3');
    });
  }

  clear() {
    this.sampleForm2 = new FormGroup({
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

  addNewData() {
    this.airsampleservice.addData(this.sampleForm2.value);
  }
}
