import { Component, OnInit, ViewChild } from '@angular/core';
import { GridOptions, Module } from 'ag-grid-community';
import { ArHomeService } from '../Services/ar-home.service';
import { IgxHierarchicalGridComponent, IGridCreatedEventArgs, IgxGridComponent, ISortingExpression ,
  DefaultSortingStrategy,
  IgxColumnComponent,
  SortingDirection} from 'igniteui-angular';
  // import { Mock } from "src/assets/JSON/Mock";
@Component({
  selector: 'app-arhome',
  templateUrl: './arhome.component.html',
  styleUrls: ['./arhome.component.css']
})
export class ArhomeComponent implements OnInit {

  @ViewChild("hGrid")
    public hGrid: IgxHierarchicalGridComponent;
    
  private gridApi;
  private gridColumnApi;
  public columnDefs;
  public defaultColDef;
  public autoGroupColumnDef;
  public rowData: [];
  
  public gridOptions: GridOptions;
  public rowClassRules;



  constructor(private arhomeService: ArHomeService) {

    // this.data = Mock;
        this.expr = [
            { dir: SortingDirection.Asc, fieldName: "Competency", ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() },
              { dir: SortingDirection.Asc, fieldName: "InvoiceNo", ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() }
        ];
  }

  @ViewChild("grid1", { read: IgxGridComponent, static: true })
  public grid1: IgxGridComponent;
  public data;
  public expr: ISortingExpression[];
  
  ngOnInit(): void {

    this.arhomeService
  .getMockData()
  .then(
    data => 
    {
      this.data = data;
      console.log(this.data);
    }
    ).catch(err => {
      console.log("Error",err);
    });
  }
 
  public formatData(val:any){
    return val === null ? "-" : val;
  }

public formatDate(val: Date) {
  return new Intl.DateTimeFormat("en-US").format(val);
}
public formatCurrency(value: number) {
  return "$" + value.toFixed(2);
}
public isDate(value: any) {
  if (value instanceof Date) {
      return true;
  } else {
      return false;
  }
}
public SumofRecords(values: number[]) {
  // const startDate = new Date("1/1/2017");
  // const endDate = new Date("12/31/2017");
  // for(let i=0; i<= values.length; i++){
  //  var sum = values[i] + values[i+1];
  // }
  var total;
  console.log("Values",values);
  var keys = Object.keys(values);
  var some = keys.forEach(item =>{
     total = values.reduce((sum, item) => sum + item, 0);
  })
 
  // values.forEach(item => {
  //   sum = sum + item;
  // })
  // return values.filter((x) => x.OrderDate >= startDate && x.OrderDate <= endDate).length;
  return total;    
  
}
public toggleSummary(column: IgxColumnComponent) {
  column.hasSummary = !column.hasSummary;
}
}
