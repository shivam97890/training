import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit {

  divList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  count = this.divList.length;

  onScroll(event: any) {
    for (let index = 1; index <= 10; index++) {
      this.divList.push(this.divList.length + 1)
    }
  }

  constructor() { }

  ngOnInit(): void {

  }


  getCount(count: string | number): void {
    alert(count)
  }
}
