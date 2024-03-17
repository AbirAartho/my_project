import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(public authService: AuthService, private router: Router) { }

  
  
  
  onSubmit() {
    console.log(this.signUpForm.value);
    console.log('----------------------------------------------');
    
    this.authService.addData(this.signUpForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/login');
    });
      
    
  }

  
  doAction($event: any) {
    console.log($event.target.value);
    this.signUpForm.value.gridCheck += $event.target.value; 
  
  }

  
  
    signUpForm: FormGroup = new FormGroup({
      inputEmail: new FormControl(''),
      inputPassword: new FormControl(),
      inputAddress: new FormControl(''),
      inputAddress2: new FormControl(''),
      inputCity: new FormControl(''),
      inputZip: new FormControl(''),
      gridCheck: new FormControl(''),
      radioCheck: new FormControl(),
      inputLname: new FormControl(''),
      inputFname: new FormControl('')
    });
  
    data!: any;
  
    clear() {
      this.signUpForm = new FormGroup({
        inputEmail: new FormControl(''),
        inputPassword: new FormControl(),
        inputAddress: new FormControl(''),
        inputAddress2: new FormControl(''),
        inputCity: new FormControl(''),
        inputZip: new FormControl(''),
        gridCheck: new FormControl(''),
        radioCheck: new FormControl(),
        inputLname: new FormControl(''),
      inputFname: new FormControl('')
      });
    }
}
