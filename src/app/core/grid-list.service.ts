import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridListService {

  dataStore = new BehaviorSubject<any>([]);

  data: any;

  constructor(public http: HttpClient) { }


  getData(): any {
    const url = 'assets/data.JSON';
    if (this.data) {
      this.dataStore.next(this.data);
      return this.dataStore
    } else {
     this.http.get<any>(url).subscribe((response: any) => {
       if(response){
        this.data = response;
        this.dataStore.next(this.data);
       }
      });
      return this.dataStore
    }

  }
}
