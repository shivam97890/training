import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {


  items:any=[{
    id:11,
    name:'shivam1',
    sec:'d',
    mark:38
  },{
    id:1,
    name:'shivam5',
    sec:'d',
    mark:39
  },{
    id:2,
    name:'shivam2',
    sec:'d',
    mark:21
  }]

 
  constructor() { }

  ngOnInit(): void {
  }

}
