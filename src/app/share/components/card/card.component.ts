import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  dataList: any = {}
  @Input() set data(value: any) {
    this.dataList = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
