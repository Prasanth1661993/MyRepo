import {  OnChanges,
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef } from '@angular/core';
// import * as d3 from "d3";

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
  }
  ngAfterViewInit() {
    // if (!this.chart) {
    //   this.chart = new TreeChart();
    // }
    this.updateChart();
  }

  ngOnChanges() {
    this.updateChart();
  }
  updateChart() {
    // if (!this.data) {
    //   return; 
    // }
    // if (!this.chart) {
    //   return; 
    // }
    // this.chart
    //   .container(this.chartContainer.nativeElement)
    //   .data(this.data)
    //   .svgWidth(500)
    //   .initialZoom(0.4)
    //   .onNodeClick(d => console.log(d + " node clicked"))
    //   .render();
   }
  
  

}



