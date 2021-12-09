import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { TimerService } from 'src/app/core/timer.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-start-stop-reset-timer',
  templateUrl: './start-stop-reset-timer.component.html',
  styleUrls: ['./start-stop-reset-timer.component.scss']
})
export class StartStopResetTimerComponent implements OnInit,OnDestroy {

  _pauseNo: number = 0;
  private subs = new SubSink();

  @Input() set pauseNo(value: number) {
    this._pauseNo = value;
  }

  _startNo: number = 0;
  @Input() set startNo(value: number) {
    this._startNo = value;
  }
  constructor(public timerService: TimerService,private route: Router) { }

  ngOnInit(): void {
    if(this.route.url==='/timer-two'){
    this.getData()
    }
  }

  getData() {
    this.subs.sink = this.timerService.getData().subscribe(res => {
      this._pauseNo = res?.pauseCount;
      this._startNo = res.startCount;
    })
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
