import { Component, OnInit } from '@angular/core';
import { RestApiService } from './service/rest-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.isLogin();
    this.subscription = this.apiService.currentMessage.subscribe(message => this.sharedMessage = message);
  }

  isLogin() {
    let login = localStorage.getItem("isLogin");
    if (login == "true") {
      this.apiService.changeMessage("true");
    }
  }

  constructor(public apiService: RestApiService) {}

  sharedMessage: string = '';
  subscription!: Subscription;
}
