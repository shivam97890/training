import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridListService {

  dataStore = new BehaviorSubject<any>([]);

  constructor(public http: HttpClient) { }


  setData(data: any) {
    this.dataStore.next(data);
  }

  getStoreData(){
    return this.dataStore
  }

  getData(): any {
    const url = 'assets/data.JSON';
    return this.http.get<any>(url);
  }
}
