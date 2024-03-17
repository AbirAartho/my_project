import { Component, OnInit } from '@angular/core';
import { WatersampleService } from 'src/app/service/watersample.service';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss']
})
export class WaterComponent implements OnInit {
  waterDashboardDataList!:any;
  constructor(private waterService: WatersampleService ){}
  startDate!:any ;
  endDate!:any ;

  ngOnInit(): void {
    this.waterService.search("undefined","undefined").subscribe(res => {
      this.waterDashboardDataList = res;
      console.log(this.waterDashboardDataList );
      
    })
  }
  search(){
    this.waterService.search(this.startDate,this.endDate).subscribe(res => {
      this.waterDashboardDataList = res;
      console.log(this.waterDashboardDataList ,'---------------------------');
      
    })
  }

}
