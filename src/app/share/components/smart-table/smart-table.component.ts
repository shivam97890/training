import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss']
})
export class SmartTableComponent implements OnInit {

  items: any = [];
  clonedData: any = [];
  header: any = {}

  @Input() set data(value: any) {
    this.items = value;
    this.clonedData = JSON.parse(JSON.stringify(this.items))
    Object.keys(value[0]).forEach((ele: string) => {
      this.header[ele] = 0
    })

  }

  constructor() { }

  ngOnInit(): void {
  }


  sortingOrder(keyName: string): void {
    this.header[keyName]++
    if (this.header[keyName] === 1) {
      this.asceOrder(keyName);
    } else if (this.header[keyName] === 2) {
      this.descOrder(keyName);
    } else {
      this.header[keyName] = 0;
      this.items = JSON.parse(JSON.stringify(this.clonedData))
    }
  }

  asceOrder(key: string): void {
    this.items.sort((a: any, b: any) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    })

  }

  descOrder(key: string): void {
    this.items.sort((a: any, b: any) => {
      if (a[key] < b[key]) {
        return 1;
      }
      if (a[key] > b[key]) {
        return -1;
      }
      return 0;
    })

  }

}
