import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WatersampleService } from 'src/app/service/watersample.service';

@Component({
  selector: 'app-sample-create',
  templateUrl: './sample-create.component.html',
  styleUrls: ['./sample-create.component.scss']
})
export class SampleCreateComponent {

  constructor(public watersampleservice: WatersampleService , private router: Router) { }

  doAction($event: any) {
    console.log($event.target.value);
    this.sampleForm.value.gridCheck += $event.target.value; 
  
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

  data!: any;

  onSubmit() {
    console.log(this.sampleForm.value);
    
    this.watersampleservice.addData(this.sampleForm.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/list2');
    });
  }

  clear() {
    this.sampleForm = new FormGroup({
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

  addNewData() {
    this.watersampleservice.addData(this.sampleForm.value);
  }
}
