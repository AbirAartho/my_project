import { Component, OnInit } from '@angular/core';
import { AirsampleService } from 'src/app/service/airsample.service';

@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.scss']
})
export class AirComponent implements OnInit {
  airDashboardDataList!:any;
  constructor(private airService: AirsampleService ){}
  startDate!:any ;
  endDate!:any ;

  ngOnInit(): void {
    this.airService.search("undefined","undefined").subscribe(res => {
      this.airDashboardDataList = res;
      console.log(this.airDashboardDataList );
      
    })
  }
  search(){
    this.airService.search(this.startDate,this.endDate).subscribe(res => {
      this.airDashboardDataList = res;
      console.log(this.airDashboardDataList ,'---------------------------');
      
    })
  }

}
