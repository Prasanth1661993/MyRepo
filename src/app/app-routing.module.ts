import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArhomeComponent } from './arhome/arhome.component';
import { PiechartsComponent } from './piecharts/piecharts.component';
import { DonutchartsComponent } from './donutcharts/donutcharts.component';
import { BarchartsComponent } from './barcharts/barcharts.component';



const routes: Routes = [

  {
    path:'arhome',
    component:ArhomeComponent
  },
  {
    path:'pie',
    component:PiechartsComponent
  },
  {
    path:'bar',
    component:BarchartsComponent
  },
  {
    path:'donut',
    component:DonutchartsComponent
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
