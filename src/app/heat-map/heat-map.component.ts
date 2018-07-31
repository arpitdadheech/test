import { Component, OnInit } from '@angular/core';
import { DataCaService } from './../services/data-ca.service';
import { concat } from 'rxjs/internal/observable/concat';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {
  multi: any[];

  view: any[] = [1500, 1400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'DataName';
  showYAxisLabel = true;
  yAxisLabel = 'User';
  // Multi = [];
  Multi = []
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private dataCallSerive: DataCaService) {
   }

    tableData: any;
    prisrineTableDataKeys: any;
    tableDataKeys: any;
    insuredType: any;
    changeType: any;
    selectedFilters: any;
    onceFiltered: boolean;

  ngOnInit() {
    this.dataCallSerive.getJSONDATA().subscribe(data => {
		  this.tableData = data;
      this.prisrineTableDataKeys = Object.keys(data[0]);
      this.tableDataKeys = Object.keys(data[0]);
    });
    
  }

  chnageHeatData(data){
   this.multi = [{
      "name": "User",
      "series": data
    }]
  }

  onSelect() {
    console.log(this.changeType);
    let sum = 0;
    var tableSeriesObject = [];
    if (this.changeType === 'insured') {
      for (const element of this.prisrineTableDataKeys) {
        if (!element.toLowerCase().includes('uninsured')) {
          for (const element1 of this.tableData) {
            if (typeof element1[element] === 'number') {
              sum += element1[element];
            }
          }
            tableSeriesObject.push({'name': element,'value': sum});
        }
      }
      this.chnageHeatData(tableSeriesObject);
    } else if (this.changeType === 'uninsured') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes('uninsured')) {
          for (const element1 of this.tableData) {
            if (typeof element1[element] === 'number') {
              sum += element1[element];
            }
          }
            tableSeriesObject.push({'name': element,'value': sum});
        }
      }
      this.chnageHeatData(tableSeriesObject);
    } else if (this.changeType === '0 to 64 years') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes('under 18 years') || element.toLowerCase().includes('18 to 64 years')) {
          for (const element1 of this.tableData) {
            if (typeof element1[element] === 'number') {
              sum += element1[element];
            }
          }
            tableSeriesObject.push({'name': element,'value': sum});
        }
      }
      this.chnageHeatData(tableSeriesObject);
    } else if (this.changeType === '18 to 64 years') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes('18 to 64 years')) {
          this.chnageHeatData(element);
          // this.tableDataKeys.push(element);
        }
      }
    }else if (this.changeType === 'M') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes('male') && !element.toLowerCase().includes('female')) {
          for (const element1 of this.tableData) {
            if (typeof element1[element] === 'number') {
              sum += element1[element];
            }
          }
            tableSeriesObject.push({'name': element,'value': sum});
        }
      }
      this.chnageHeatData(tableSeriesObject);
    } else if (this.changeType === 'F') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes('female')) {
          for (const element1 of this.tableData) {
            if (typeof element1[element] === 'number') {
              sum += element1[element];
            }
          }
            tableSeriesObject.push({'name': element,'value': sum});
        }
      }
      this.chnageHeatData(tableSeriesObject);
    } else if (this.changeType === 'under 1.38') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes('under 1.38')) {
          for (const element1 of this.tableData) {
            if (typeof element1[element] === 'number') {
              sum += element1[element];
            }
          }
            tableSeriesObject.push({'name': element,'value': sum});
        }
      }
      this.chnageHeatData(tableSeriesObject);
    } else if (this.changeType === '1.38 to 1.99') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes(' 1.38 to 1.99')) {
          for (const element1 of this.tableData) {
            if (typeof element1[element] === 'number') {
              sum += element1[element];
            }
          }
            tableSeriesObject.push({'name': element,'value': sum});
        }
      }
      this.chnageHeatData(tableSeriesObject);
    } else if (this.changeType === '2.00') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes('2.00')) {
          for (const element1 of this.tableData) {
            if (typeof element1[element] === 'number') {
              sum += element1[element];
            }
          }
            tableSeriesObject.push({'name': element,'value': sum});
        }
      }
      this.chnageHeatData(tableSeriesObject);
    }
  }
}
