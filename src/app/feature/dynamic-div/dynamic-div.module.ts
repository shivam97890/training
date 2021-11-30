import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { DynamicDivComponent } from './dynamic-div.component';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: DynamicDivComponent
  }
];

@NgModule({
  declarations: [DynamicDivComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class DynamicDivModule { }
