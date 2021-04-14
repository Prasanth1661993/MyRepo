import {
  OnChanges,
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core';
import { exit } from 'process';
import { ArHomeService } from '../Services/ar-home.service';
//  import * as d3 from "d3";


// declare function Chart() : any;
declare function myTest(data: any): any;
//  import TreeChart from "../../assets/JS/OrgC.js"
// import  TreeChart from "d3-org-chart";

@Component({
  selector: 'app-donutcharts',
  templateUrl: './donutcharts.component.html',
  styleUrls: ['./donutcharts.component.css']
})
export class DonutchartsComponent implements OnInit, OnChanges {
  @ViewChild("chartContainer") chartContainer: ElementRef;
  @Input() data: any[];
  chart;
  getChartState: any;
  rawData = [];
  OrgData = [];
  colorData = [
    {id:1,red : 53,green:164,blue:232},
    {id:2,red : 52,green:199,blue:104},
    {id:3,red : 146,green:43,blue:115},
    {id:4,red : 19,green:123,blue:128}
  ];
  searchword;
  searchedData = [];
  content = [];
  constructor(private arHomeService: ArHomeService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // this.constructJsonData();
    if (!this.chart) {
      this.chart = myTest(this.OrgData);
      // this.chart = new TreeChart;
    }
    this.updateChart();
  }

  ngOnChanges() {
    this.constructJsonData();
    this.updateChart();
  }

  searchThis(){
    this.content = this.rawData
    console.log(this.searchword)
    let searchArray= [];
    var word =this.searchword;
    if (this.searchword) {
      this.content = this.content.filter(function (ele, i, array) {
        let arrayelement = ele.name;
        if(arrayelement.includes(word)){
        searchArray.push(arrayelement);
      }
      })
      this.searchedData = searchArray;
    }
    else {
      this.searchedData = [];
      console.log(this.content)
    }
    console.log(this.content)
  }
  checkSelectedSearch(selectedName){
    window.alert("Hi, You have selected "+selectedName);

  }
  updateChart() {

    if (!this.OrgData) {
      return;
    }
    if (!this.chart) {
      return;
    }
    this.chart
      .container(this.chartContainer.nativeElement)
      .data(this.OrgData)
      .svgWidth(800)
      .initialZoom(0.7)
      .onNodeClick(d => console.log(d + " node clicked"))
      .render();

  }
  constructJsonData() {

    this.arHomeService.getMockData().then(
      data => {
        data.forEach(element => {
          this.rawData.push(element);
        });
      }
    );
    let collectiveStuctData = [];
    if (this.rawData != null) {
      let checkId = 1;
      this.rawData.forEach(item => {
        if (item.isParentNode) {
          let structJson =
          {
            "nodeId": "",
            "parentNodeId": null,
            "width": 360,
            "height": 100,
            "borderWidth": 1,
            "borderRadius": 7,
            "borderColor": {
              "red": 203,
              "green": 203,
              "blue": 203,
              "alpha": 1
            },
            "backgroundColor": {
              "red": 256,
              "green": 256,
              "blue": 256,
              "alpha": 1
            },
            "nodeImage": {
              "url": "",
              "width": 100,
              "height": 100,
              "centerTopDistance": 0,
              "centerLeftDistance": 0,
              "cornerShape": "CIRCLE",
              "shadow": false,
              "backgroundColor": {
                "red": 51,
                "green": 182,
                "blue": 208,
                "alpha": 1
              },
              "borderWidth": 7,
              "borderColor": {
                "red": 255,
                "green": 230,
                "blue": 0,
                "alpha": 1
              }
            } ,
            "nodeIcon": {
              "icon": "",
              "size": 0
            },
            "nodeIconAlert": {
              "icon": "",
              "size": 30
            },
            "template": "",
            "connectorLineColor": {
              "red": 187,
              "green": 187,
              "blue": 187,
              "alpha": 1
            },
            "connectorLineWidth": 2,
            "dashArray": "",
            "expanded": false,
            "directSubordinates": 0,
            "totalSubordinates": 0
          };
          let template1 = "<div class=\"col-md-12\">\n <div style=\"margin-left:80px;\n margin-top:15px;\n font-size:25px;\n cursor: pointer;\n font-weight:bold;\n \">";

          //  Dylan Robertson
          let template2 = "</div>\n <div style=\"margin-left:80px;\n color:lightgrey;\n margin-top:4px;\n font-size:18px;\n color:grey;\n \">";
          // Delivery Head
          let template3 = "</div>\n\n <div style=\"margin-left:80px;\n  margin-top:4px;\n  font-size:18px;\n   \">";
          // Sr.Manager | Trivandrum 
          let template4 = "</div>\n\n</div>";
          structJson.template = template1 + item.name + template2 + item.designation + template3 + item.role +' '+ '|'+' ' + item.loaction + template4;
          structJson.nodeImage.url = item.image;
          structJson.nodeId = item.nodeId;
          structJson.parentNodeId = item.parentNodeId;
          collectiveStuctData.push(structJson)
        } else {
          var structJson =
          {
            "nodeId": "",
            "parentNodeId": "",
            "width": 327,
            "height": 100,
            "borderWidth": 1,
            "borderRadius": 7,
            "borderColor": {
              "red": 203,
              "green": 203,
              "blue": 203,
              "alpha": 1
            },
            "backgroundColor": {
              "red": 246,
              "green": 246,
              "blue": 246,
              "alpha": 1
            },
            "nodeImage": {
              "url": "",
              "width": 100,
              "height": 100,
              "centerTopDistance": 0,
              "centerLeftDistance": 0,
              "cornerShape": "CIRCLE",
              "shadow": false,
              "backgroundColor": {
                "red": 255,
                "green": 255,
                "blue": 255,
                "alpha": 1
              },
              "borderWidth": 7,
              "borderColor": {
                "red": 127,
                "green": 129,
                "blue": 151,
                "alpha": 1
              }
            },
            "nodeIconAlert": {
              "icon": "",
              "size": 30
            },

            "nodeIcon": {
              "icon": "",
              "size": 30,
              "cornerShape": "CIRCLE"
            },
            "template": "",
            "connectorLineColor": {
              "red": 187,
              "green": 187,
              "blue": 187,
              "alpha": 1
            },
            "connectorLineWidth": 2,
            "dashArray": "<style=\"border: 1px dashed #BBBBBB;\n  \">",
            "expanded": false
          };

          let template1 = "<div class=\"col-md-12\">\n<div style=\"margin-left:90px;\n margin-top:15px;\n font-size:20px;\n font-weight:bold;\n \">";

          //  Dylan Robertson
          let template2 = "</div>\n <div style=\"margin-left:90px;\n margin-top:4px;\n font-size:18px;\n color:grey;\n \">";
          // Delivery Head
          let template3 = "</div>\n\n <div style=\"margin-left:90px;\n  margin-top:4px;\n font-size:16px;\n \">";
          // Sr.Manager | Trivandrum 
          let template4 = "</div>\n\n  </div>";
          structJson.template = template1 + item.name + template2 + item.designation + template3 + item.role +' '+ '|'+' ' + item.loaction + template4;
          structJson.nodeImage.url = item.image;
          structJson.nodeId = item.nodeId;
          structJson.parentNodeId = item.parentNodeId;
          structJson.expanded = item.expanded;
          var orgIcon = "https://raw.githubusercontent.com/RajaGds/OrgChart/main/images/tree.png";
          if (item.isChild) {
            structJson.nodeIcon.icon = orgIcon;
          }
          
          this.colorData.forEach(colorCode =>{
            if(checkId > 4){
              checkId = 0;
            }
            if(checkId == colorCode.id){
            structJson.nodeImage.borderColor.red = colorCode.red;
            structJson.nodeImage.borderColor.green = colorCode.green;
            structJson.nodeImage.borderColor.blue = colorCode.blue;
          } 
          });
          checkId++;
          collectiveStuctData.push(structJson)
        }
      });
    }
    this.OrgData = collectiveStuctData;
    console.log("OrgData", this.OrgData);
  }
  

}



