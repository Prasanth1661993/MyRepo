import {  OnChanges,
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef } from '@angular/core';
// import * as d3 from "d3";

// declare function Chart(data:any) : any;

// import  TreeChart from "d3-org-chart";

@Component({
  selector: 'app-donutcharts',
  templateUrl: './donutcharts.component.html',
  styleUrls: ['./donutcharts.component.css']
})
export class DonutchartsComponent implements OnInit, OnChanges {
  // @ViewChild("chartContainer") chartContainer: ElementRef;
  // @Input() data: any[];
  //  chart;
  constructor() { }
  
  ngOnInit(): void {
    // console.log("Data",this.data)
  }
  ngAfterViewInit() {
    // if (!this.chart) {
  //     console.log("ngAfterViewInit",this.data)
  //     // this.chart = Chart(this.data);
  //     this.chart = new TreeChart;
  //     console.log("Data", this.chart)
  //   // }
  //   this.updateChart();
   }

  ngOnChanges() {
    this.updateChart();
  }
  updateChart() {
    // console.log("updateChart",this.data)
    // if (!this.data) {
    //   return; 
    // }
    // if (!this.chart) {
    //   return; 
    // }
    // this.chart
    //   .container(this.chartContainer)
    //   .data(this.data)
    //   .svgWidth(500)
    //   .initialZoom(0.4)
    //   .onNodeClick(d => console.log(d + " node clicked"))
    //   .render();
   }
  
  

}



