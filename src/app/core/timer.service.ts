import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  timerSubject = new BehaviorSubject<any>({
    pauseAt: [],
    timeStamp: [],
    startCount: 0,
    pauseCount: 0
  })

  limitSubject = new BehaviorSubject<number>(0)

  methodObj = new BehaviorSubject<{
    methodName: string
  }>({
    methodName: ''
  })

  constructor() { }

  setMethod(methodName: string): void {
    this.methodObj.next({ methodName })
  }

  getMethod() {
    return this.methodObj
  }

  setLimit(limit: number): void {
    this.limitSubject.next(limit)
  }

  getLimit() {
    return this.limitSubject;
  }

  setData(data: {
    pauseAt: string[],
    timeStamp: string[],
    startCount: number,
    pauseCount: number
  }): void {
    this.timerSubject.next(data)
  }


  getData() {
    return this.timerSubject;
  }

}
