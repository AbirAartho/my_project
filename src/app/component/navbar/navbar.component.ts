import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  

  constructor(public apiService: RestApiService, private router: Router) { }



  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.userRole = localStorage.getItem("role");
  }

  logOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('isLogin');
    this.apiService.changeMessage("false");
    this.router.navigateByUrl('/login');
  }

  userRole: any;
  username: any;
}
