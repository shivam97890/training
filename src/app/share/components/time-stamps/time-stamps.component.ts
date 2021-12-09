import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { TimerService } from 'src/app/core/timer.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-time-stamps',
  templateUrl: './time-stamps.component.html',
  styleUrls: ['./time-stamps.component.scss']
})
export class TimeStampsComponent implements OnInit,OnDestroy {

  _timeStamp: string[] = [];
  private subs = new SubSink();

  @Input() set timeStamp(value: string[]) {
    this._timeStamp = value;
  }

  constructor(public timerService: TimerService,private route: Router) { }

  ngOnInit(): void {
    if(this.route.url==='/timer-two'){
    this.getData()
    }
  }
  getData() {
    this.subs.sink=this.timerService.getData().subscribe(res => {
      this._timeStamp = res.timeStamp
    })
  }
  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
