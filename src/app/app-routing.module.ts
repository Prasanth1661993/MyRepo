import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PiechartsComponent } from './piecharts/piecharts.component';
import { DonutchartsComponent } from './donutcharts/donutcharts.component';
import { BarchartsComponent } from './barcharts/barcharts.component';



const routes: Routes = [
  { path: '',   redirectTo: 'donut', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: DonutchartsComponent },
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
