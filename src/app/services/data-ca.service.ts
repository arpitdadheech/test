import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { read, IWorkBook } from 'ts-xlsx';

@Injectable({
  providedIn: 'root'
})
export class DataCaService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('assets/data/UI_UX_Uninsured_Population_Census_Data_CY_2009-2014_Human_Services.csv');
  }

  trying() {
    const wb: IWorkBook = read('assets/data/UI_UX_Uninsured_Population_Census_Data_CY_2009-2014_Human_Services.csv');
    console.log(wb);
  }
  getJSONDATA() {
    return this.http.get('assets/data/CSVTOJSONDATA.json');
  }
}
