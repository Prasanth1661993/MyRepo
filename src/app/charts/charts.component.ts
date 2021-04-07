import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }



  // ADD CHART OPTIONS. 
  pieChartOptions = {
    responsive: true
}

pieChartLabels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

// CHART COLOR.
pieChartColor:any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
        ]
    }
]

pieChartData:any = [
    { 
        data: []
    }
];

ngOnInit () {
    
            this.pieChartData =[{ "data": [47, 9, 28, 54, 77] }]	 // FILL THE CHART ARRAY WITH DATA.
      
}

onChartClick(event) {
  window.alert(this.pieChartData["data"]);
  console.log(this.pieChartData['data']);
}

}
