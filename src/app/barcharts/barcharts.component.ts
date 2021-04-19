import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Profile} from '../barcharts/barcharts.model'
@Component({
  selector: 'app-barcharts',
  templateUrl: './barcharts.component.html',
  styleUrls: ['./barcharts.component.css']
})
export class BarchartsComponent implements OnInit {
  @Input() nodeData: any;
  isNodeSelected = false;
  nameOfPerson : string;
  profile: Profile
  constructor(private activatedRoute : ActivatedRoute,private route : Router) { 
this.profile = new Profile();
  }
 ;
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(data =>{
    //   let nodeData = data;
    // })
    console.log("inside bar charts nodeData",this.nodeData);
    
       this.profile.name = this.nodeData.name;
       this.profile.image = this.nodeData.image;
       this.profile.gpn = this.nodeData.gpn;
       this.profile.emainID = this.nodeData.emainID;
       this.profile.designation = this.nodeData.designation;
       this.profile.role = this.nodeData.role;

  }
  redirectToORG(){
    this.route.navigate(['donut']);
    window.location.reload();
  }
}
