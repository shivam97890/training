import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss']
})
export class AgeCalculatorComponent implements OnInit {

  dob: Date = new Date();
  age: string = '';
  hour: number = 0;
  min: number = 0;
  second: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ageCalculator(): void {
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
    let hourDiff = todayHour - this.hour;
    let minDiff = todayMin - this.min;
    let secondDiff = todaySec - this.second;


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
    if (hourDiff < 0) {

      hourDiff = 24 + hourDiff
      
    }
    if (minDiff < 0) {
      minDiff = 60 + minDiff
    }
    if (secondDiff < 0) {
      secondDiff = 60 + secondDiff
    }
    console.log(todayHour, todayMin, todaySec)
    console.log(hourDiff, minDiff, secondDiff)

    this.age = `   ${y}  Years  ${m}   Months   ${d}  Days ${hourDiff} hours ${minDiff} minutes ${secondDiff} second.`;
  }
}
