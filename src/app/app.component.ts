import { Component, OnInit } from '@angular/core';
 import  * as d3 from "d3";
import { ArHomeService } from './Services/ar-home.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ORG';
  data:any = null;
  check: any;
  nodeData: String;
  constructor(private arHomeService: ArHomeService) { }
  ngOnInit(){
    // d3.json(
    //   "https://raw.githubusercontent.com/Prasanth1661993/MyRepo/master/Mock.json"
    // ).then(data => {
    //     this.data = data;
    //     console.log("appComponent",this.data)
    // });
    this.arHomeService.getMockData().then(
      data => {
        this.data = data;
      });
    
  }
  addItem(newItem: boolean) {
    this.check = newItem;
  
  }
  redirectNode(nodeData: String){
    if(this.check){
      this.nodeData = nodeData;
      console.log("nodeData",nodeData);
    }

  }

  
}
