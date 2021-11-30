import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerOneComponent } from './timer-one.component';

import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from 'src/app/share/share.module';
import { CountdownModule } from 'ngx-countdown';

const routes: Routes = [
  {
    path: '',
    component: TimerOneComponent
  }
];

@NgModule({
  declarations: [TimerOneComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),
    CountdownModule
  ]
})
export class TimerOneModule { }
