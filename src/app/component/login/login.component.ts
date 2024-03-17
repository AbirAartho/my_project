import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, public restApiService: RestApiService) { }

  ngOnInit(): void {
    this.isLogin();
  }

  isLogin() {
    let login = localStorage.getItem("isLogin");
    if (login !== "true") {
      this.router.navigateByUrl('/login');
    }else{
      this.router.navigateByUrl('/home');
    }
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    remember_me:  new FormControl(),
    email: new FormControl('')
  });

  authList: any[] = [];

  login(){
    console.log(this.loginForm.value);

    this.authService.getAll().subscribe((res: any) => {
      this.authList = res;
console.log(this.loginForm.value)
      let flag = false;

      for (let i = 0; i < this.authList.length; i++) {
        if (this.loginForm.value.username == this.authList[i].inputEmail && 
          this.loginForm.value.password == this.authList[i].inputPassword) {
          
          localStorage.setItem("isLogin", "true");
          localStorage.setItem("username", this.authList[i].inputEmail);
          localStorage.setItem("role", this.authList[i].role);

          flag = true;
        }
      }

      if (flag == true) {
        this.restApiService.changeMessage("true");
        this.router.navigateByUrl('/home');
      } else {
        alert("Incorrect UserName Or Password!")
      }
    });
  }
}
