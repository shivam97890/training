import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { GridListViewComponent } from './grid-list-view.component';

import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from 'src/app/share/share.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
const routes: Routes = [
  {
    path: '',
    component: GridListViewComponent
  }
];

@NgModule({
  declarations: [GridListViewComponent],
  imports: [
    CommonModule,
    ShareModule,
    MatButtonToggleModule,
    RouterModule.forChild(routes)
  ]
})
export class GridListViewModule { }
