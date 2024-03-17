import { Component, OnInit } from '@angular/core';
import { SoilsampleService } from 'src/app/service/soilsample.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-soil',
  templateUrl: './soil.component.html',
  styleUrls: ['./soil.component.scss']
})
export class SoilComponent implements OnInit {
  soilDashboardDataList!:any;
  constructor(private soilService: SoilsampleService ){}
  startDate!:any ;
  endDate!:any ;

  ngOnInit(): void {
    this.soilService.search("undefined","undefined").subscribe(res => {
      this.soilDashboardDataList = res;
      console.log(this.soilDashboardDataList );
      
    })
    this.createChart();
  }
  search(){
    this.soilService.search(this.startDate,this.endDate).subscribe(res => {
      this.soilDashboardDataList = res;
      console.log(this.soilDashboardDataList ,'---------------------------');
      
    })
  }

  public chart: any;

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "P",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "S",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
          ,
          {
            label: "Zn",
            data: ['54', '542', '53', '327', '17',
									 '0.00', '531', '541'],
            backgroundColor: 'yellow'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}
