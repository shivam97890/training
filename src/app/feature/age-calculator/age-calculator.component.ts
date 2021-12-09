import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss']
})
export class AgeCalculatorComponent implements OnInit, OnDestroy {

  dob: Date = new Date();
  age: string = '';
  hour: number = 0;
  min: number = 0;
  second: number = 0;
  hoursList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  minAndSecList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
  timer: any;
  constructor() { }

  ngOnInit(): void {
  }

  ageCalculator(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      let d1 = new Date(this.dob).getDate();
      let m1 = new Date(this.dob).getMonth() + 1;
      let y1 = new Date(this.dob).getFullYear();
      let date = new Date();
      let d2 = date.getDate();
      let m2 = 1 + date.getMonth();
      let y2 = date.getFullYear();
      let todayHour = date.getHours();
      let todayMin = date.getMinutes();
      let todaySec = date.getSeconds();
      let dobTime = `${this.hour}:${this.min}:${this.second}`;
      let todayTime = `${todayHour}:${todayMin}:${todaySec}`;
      let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
      }
      if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
      }
      let d = d2 - d1;
      let m = m2 - m1;
      let y = y2 - y1;
      let startTime = moment(dobTime, "HH:mm:ss");
      let endTime = moment(todayTime, "HH:mm:ss");
  
      // calculate total duration
      let duration = moment.duration(endTime.diff(startTime));
  
      // duration in hours
      let hours = Math.floor(duration.asHours());
  
      // duration in minutes
      let minutes = Math.floor(duration.asMinutes() % 60);
      let seconds = Math.floor(duration.asSeconds() % 60);
      this.age = `   ${y}  Years  ${m}   Months   ${d}  Days ${hours} hours ${minutes} minutes ${seconds} second.`;
    }, 1000);

  }
  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
