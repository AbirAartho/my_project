import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SoilsampleService } from 'src/app/service/soilsample.service';

@Component({
  selector: 'app-sample3-create',
  templateUrl: './sample3-create.component.html',
  styleUrls: ['./sample3-create.component.scss']
})
export class Sample3CreateComponent {

  constructor(public soilsampleservice: SoilsampleService , private router: Router) { }

  doAction($event: any) {
    console.log($event.target.value);
    this.sampleForm3.value.gridCheck += $event.target.value; 
  
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

  data!: any;

  onSubmit() {
    console.log(this.sampleForm3.value);
    
    this.soilsampleservice.addData(this.sampleForm3.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/list4');
    });
  }

  clear() {
    this.sampleForm3 = new FormGroup({
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

  addNewData() {
    this.soilsampleservice.addData(this.sampleForm3.value);
  }

}
