import { DataCaService } from './../services/data-ca.service';
import { Component, OnInit } from '@angular/core';
import { OrderBy } from "../order-by.pipe";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataCallSerive: DataCaService) { }

  sortingLocationField: string = 'loc_name';
  tableData: any;
  prisrineTableDataKeys: any;
  tableDataKeys: any;
  insuredType: any;
  ageType: any;
  sexType: any;
  RIPType: any;
  raceType: any;
  selectedFilters: any;
  onceFiltered: boolean;
  sortingField: string = 'loc_name';
  column = 'key';
  ngOnInit() {
    // this.dataCallSerive.getData().subscribe(data => {
    //   console.log(data);
    // });
    this.selectedFilters = [];
    this.dataCallSerive.trying();
    this.dataCallSerive.getJSONDATA().subscribe(data => {
      this.tableData = data;
      
      this.prisrineTableDataKeys = Object.keys(data[0]);
      this.tableDataKeys = Object.keys(data[0]);
    });
  }

  customSort(event) {
    event.data.sort((data1, data2) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2);
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });
}

  getSum(key) {
    let sum = 0;
    for (const element of this.tableData) {
      if (typeof element[key] === 'number') {
        sum += element[key];
      }
    }
    return sum;
  }

  resetDropdowns() {
    this.insuredType = 'insured';
    this.sexType = 'all';
    this.ageType = 'all';
    this.raceType = 'all';
    this.RIPType = 'all';
  }

  selectInsuredType() {
    this.tableDataKeys = [];
    if (this.ageType === 'all') {
      this.tableDataKeys = this.prisrineTableDataKeys;
      this.resetDropdowns();
    } else if (this.insuredType === 'insured') {
      for (const element of this.prisrineTableDataKeys) {
        if (!element.toLowerCase().includes('uninsured')) {
          this.tableDataKeys.push(element);
        }
      }
    } else if (this.insuredType === 'uninsured') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes('uninsured')) {
          this.tableDataKeys.push(element);
        }
      }
    }
    this.selectedFilters.push(this.insuredType);
  }

  filteredData(key) {
    let isValid = true;
    for (const element of this.selectedFilters) {
      if (!key.toLowerCase().includes(element)) {
        isValid = false;
      }
    }
    return isValid;
  }

  selectAgeType() {
    this.tableDataKeys = [];

    if (this.ageType === 'all') {
      this.tableDataKeys = this.prisrineTableDataKeys;
      this.resetDropdowns();
    } else if (this.ageType === '0 to 64 years') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes('under 18 years') || element.toLowerCase().includes('18 to 64 years')) {
          this.tableDataKeys.push(element);
        }
      }
    } else if (this.ageType === '18 to 64 years') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes('18 to 64 years')) {
          this.tableDataKeys.push(element);
        }
      }
    }
  }
  selectsexType() {
    this.tableDataKeys = [];

    if (this.sexType === 'all') {
      this.tableDataKeys = this.prisrineTableDataKeys;
      this.resetDropdowns();
    } else if (this.sexType === 'M') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes('male') && !element.toLowerCase().includes('female')) {
          this.tableDataKeys.push(element);
        }
      }
    } else if (this.sexType === 'F') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes('female')) {
          this.tableDataKeys.push(element);
        }
      }
    }
  }
  selectRIPType() {
    this.tableDataKeys = [];

    if (this.RIPType === 'all') {
      this.tableDataKeys = this.prisrineTableDataKeys;
      this.resetDropdowns();
    } else if (this.RIPType === 'under 1.38') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes('under 1.38')) {
          this.tableDataKeys.push(element);
        }
      }
    } else if (this.RIPType === '1.38 to 1.99') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes(' 1.38 to 1.99')) {
          this.tableDataKeys.push(element);
        }
      }
    } else if (this.RIPType === '2.00') {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes('2.00')) {
          this.tableDataKeys.push(element);
        }
      }
    }
  }
  selectRaceType() {
    this.tableDataKeys = [];

    if (this.raceType === 'all') {
      this.tableDataKeys = this.prisrineTableDataKeys;
      this.resetDropdowns();
    } else {
      for (const element of this.prisrineTableDataKeys) {
        if (element.toLowerCase().includes(this.raceType.toLowerCase())) {
          this.tableDataKeys.push(element);
        }
      }
    }

  }


  toggleGroupSort(field: string){
    console.log(field);
  if(field == 'loc_name'){
    this.sortingLocationField = '-loc_name';
  } else {
    this.sortingLocationField = 'loc_name';
  }

};


}
