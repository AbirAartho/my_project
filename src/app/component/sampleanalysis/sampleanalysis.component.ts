import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sampleanalysis',
  templateUrl: './sampleanalysis.component.html',
  styleUrls: ['./sampleanalysis.component.scss']
})
export class SampleanalysisComponent implements OnInit {
  
  ngOnInit(): void {
    
  const ctx = document.getElementById('myChart');

  var myChart = new Chart("myChart", {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  }
  
}
