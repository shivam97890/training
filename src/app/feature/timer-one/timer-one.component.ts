import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-timer-one',
  templateUrl: './timer-one.component.html',
  styleUrls: ['./timer-one.component.scss']
})
export class TimerOneComponent implements OnInit {

  interval: any;
  limit: any = 0;
  
  resetTimer: number|undefined ;
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

  constructor() { }


  ngOnInit(): void {

  }


  startCount(limitcount: string): void {
    if (parseInt(limitcount) > 0) {
      let startAt = moment(new Date()).format('DD-MM-YYYY h:mm:ss a')
      this.limit = parseInt(limitcount);
      this.timer.startCount = this.timer.startCount + 1;
      this.timer.timeStamp.unshift(`Start at : ${startAt}`)
      this.resetTimer = parseInt(limitcount);
      this.interval = setInterval(() => {
        this.limit = this.limit - 1;
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
  }

  pauseCount(): void {
    let pauseAt = moment(new Date()).format('DD-MM-YYYY h:mm:ss a')
    this.timer.pauseCount = this.timer.pauseCount + 1;
    this.timer.pauseAt.unshift(this.limit);
    this.timer.timeStamp.unshift(`Pause at : ${pauseAt}`)
    clearInterval(this.interval)
  }

}
