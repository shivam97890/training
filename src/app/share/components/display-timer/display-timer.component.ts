import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { TimerService } from 'src/app/core/timer.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.scss']
})
export class DisplayTimerComponent implements OnInit, OnDestroy {

  _count: number = 0
  private subs = new SubSink();

  @Input() set count(value: number) {
    this._count = value;
  }

  constructor(public timerService: TimerService,private route: Router) { }

  ngOnInit(): void {
    if(this.route.url==='/timer-two'){
    this.getCount();
    }
  }

  getCount() {
    this.subs.sink = this.timerService.getLimit().subscribe(count => {
      if (count) {
        this._count = count;
      }
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
