import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TimerService } from 'src/app/core/timer.service';
import { SubSink } from 'subsink';


@Component({
  selector: 'app-pause-start-count',
  templateUrl: './pause-start-count.component.html',
  styleUrls: ['./pause-start-count.component.scss']
})
export class PauseStartCountComponent implements OnInit, OnDestroy {



  initialCount: number = 0
  _pauseAt: any[] = [];
  startStop: boolean = true;
  private subs = new SubSink();

  @Output() start = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Output() pause = new EventEmitter();
  @Input() set pauseAt(value: any) {
    this._pauseAt = value
  }



  constructor(
    public timerService: TimerService,
    private route: Router
  ) { }

  ngOnInit(): void {
    if (this.route.url === '/timer-two') {
      this.getData();
    }
  }

  getData() {
    this.subs.sink = this.timerService.getData().subscribe(res => {
      this._pauseAt = res.pauseAt
    })
  }

  onStart(): void {
    this.startStop = false;
    this.start.emit(this.initialCount.toString())
    this.timerService.setLimit(this.initialCount);
    this.timerService.setMethod('start')
  }

  onPause() {
    this.startStop = true;
    this.pause.emit('')
    this.timerService.setMethod('pause')
  }

  onReset() {
    this.reset.emit('')
    this.timerService.setMethod('reset')
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
