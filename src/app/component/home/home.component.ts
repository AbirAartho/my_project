import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: RestApiService, private  router: Router) {}

 
  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe(message => this.sharedMessage = message);
    this.isLogin();
  }
  isLogin() {
    let login = localStorage.getItem("isLogin");
    // this.dataService.changeMessage("true");

    if (login !== "true") {
      this.router.navigateByUrl('/login');
    }
  }


  sharedMessage: string = '';
  subscription!: Subscription;

  newMessage() {
    this.dataService.changeMessage("Hello from Parents")
  }

}
