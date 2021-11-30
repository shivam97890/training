import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerTwoComponent } from './timer-two.component';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from 'src/app/share/share.module';
import { CountdownModule } from 'ngx-countdown';

const routes: Routes = [
  {
    path: '',
    component: TimerTwoComponent
  }
];

@NgModule({
  declarations: [TimerTwoComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),
    CountdownModule
  ]
})
export class TimerTwoModule { }
