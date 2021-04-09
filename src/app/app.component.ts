import { Component, OnInit } from '@angular/core';
 import  * as d3 from "d3";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ORG';
  data:any = null;
  ngOnInit(){
    console.log("appComponent",this.data)
    d3.json(
      "https://raw.githubusercontent.com/Prasanth1661993/MyRepo/master/Mock.json"
    ).then(data => {
        this.data = data;
        console.log("appComponent",this.data)
    });
    
  }

 

  
}
