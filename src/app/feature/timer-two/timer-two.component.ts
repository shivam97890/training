import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { TimerService } from 'src/app/core/timer.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-timer-two',
  templateUrl: './timer-two.component.html',
  styleUrls: ['./timer-two.component.scss']
})
export class TimerTwoComponent implements OnInit, OnDestroy {

  interval: any;
  limit: any = 0;
  private subs = new SubSink();
  resetTimer: number | undefined;
  timer: {
    pauseAt: string[],
    timeStamp: string[],
    startCount: number,
    pauseCount: number
  } = {
      pauseAt: [],
      timeStamp: [],
      startCount: 0,
      pauseCount: 0
    }



  constructor(public timerService: TimerService, private route: Router) { }

  ngOnInit(): void {
    if (this.route.url === '/timer-two') {
      this.callMethod();
    }
  }


  callMethod(): void {
    this.subs.sink = this.timerService.getLimit().subscribe(limit => {
      this.limit = limit
    })
    this.subs.sink = this.timerService.getMethod().subscribe((method) => {
      if (method.methodName === 'start') {
        this.startCount(this.limit);
      }
      if (method.methodName === 'pause') {
        this.pauseCount();
      }
      if (method.methodName === 'reset') {
        this.resetCount();
      }
    })
  }

  startCount(limitcount: string): void {
    if (parseInt(limitcount) > 0) {    
      let startAt = moment(new Date()).format('DD-MM-YYYY h:mm:ss a')
      this.limit = parseInt(limitcount);
      this.timer.startCount = this.timer.startCount + 1;
      this.timer.timeStamp.unshift(`Start at : ${startAt}`)
      this.timerService.setData(this.timer);
      this.resetTimer = parseInt(limitcount);
      this.interval = setInterval(() => {
        this.limit = this.limit - 1;
        this.timerService.setLimit(this.limit);
        if (this.limit === 0) {
          clearInterval(this.interval)
        }
      }, 1000)
    }

  }



  resetCount(): void {
    clearInterval(this.interval)
    this.limit = this.resetTimer;
    this.startCount(this.limit)
    this.timer = {
      pauseAt: [],
      timeStamp: [],
      startCount: 0,
      pauseCount: 0
    }
    this.timerService.setData(this.timer);
  }

  pauseCount(): void {
    let pauseAt = moment(new Date()).format('DD-MM-YYYY h:mm:ss a')
    this.timer.pauseCount = this.timer.pauseCount + 1;
    this.timer.pauseAt.unshift(this.limit);
    this.timer.timeStamp.unshift(`Pause at : ${pauseAt}`)
    this.timerService.setData(this.timer);
    clearInterval(this.interval)
  }

  ngOnDestroy() {
    this.timerService.setData({
      pauseAt: [],
      timeStamp: [],
      startCount: 0,
      pauseCount: 0
    })
    this.timerService.setLimit(0);
    this.timerService.setMethod('')
    this.subs.unsubscribe();
  }

}
