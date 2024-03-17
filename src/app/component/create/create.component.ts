import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  doAction($event: any) {
  console.log($event.target.value);
  this.userForm.value.gridCheck += $event.target.value; 

}
  ngOnInit(): void {

  }

  constructor(public apiService: AuthService, private router: Router) { }

  userForm: FormGroup = new FormGroup({
    inputLname: new FormControl(''),
    inputFname: new FormControl(''),
    inputEmail: new FormControl(''),
    inputPassword: new FormControl(),
    inputAddress: new FormControl(''),
    inputAddress2: new FormControl(''),
    inputCity: new FormControl(''),
    inputZip: new FormControl(''),
    gridCheck: new FormControl(''),
    radioCheck: new FormControl()
  });

  data!: any;

  onSubmit() {
    console.log(this.userForm.value);
    
    this.apiService.addData(this.userForm.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/list');
    });
  }

  clear() {
    this.userForm = new FormGroup({
      inputLname: new FormControl(''),
      inputFname: new FormControl(''),
      inputEmail: new FormControl(''),
      inputPassword: new FormControl(),
      inputAddress: new FormControl(''),
      inputAddress2: new FormControl(''),
      inputCity: new FormControl(''),
      inputZip: new FormControl(''),
      gridCheck: new FormControl(''),
      radioCheck: new FormControl()
    });
  }

  addNewData() {
    this.apiService.addData(this.userForm.value);
  }
}
