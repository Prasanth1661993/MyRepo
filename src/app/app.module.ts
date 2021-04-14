import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArhomeComponent } from './arhome/arhome.component';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderComponent } from './header/header.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { ArHomeService } from './Services/ar-home.service';
import { HttpClientHeaders } from './common/http-headers/http-client-headers';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxHierarchicalGridModule } from 'igniteui-angular';

// Here we import the IgxGridModule, so we can use the igxGrid!
import { IgxGridModule } from 'igniteui-angular';
import { ChartsComponent } from './charts/charts.component';

import { ChartsModule } from 'ng2-charts';
import { PiechartsComponent } from './piecharts/piecharts.component';
import { DonutchartsComponent } from './donutcharts/donutcharts.component';
import { BarchartsComponent } from './barcharts/barcharts.component';
import { VerticalChartComponent } from './vertical-chart/vertical-chart.component'
// import {MatFormFieldModule, MatAutocompleteModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ArhomeComponent,
    HeaderComponent,
    SubheaderComponent,
    ChartsComponent,
    PiechartsComponent,
    DonutchartsComponent,
    BarchartsComponent,
    VerticalChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    IgxHierarchicalGridModule,
    IgxGridModule,
    ChartsModule
    
  ],
  providers: [,
    ArHomeService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
