import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTableComponent } from './dynamic-table.component';

import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from 'src/app/share/share.module';

const routes: Routes = [
  {
    path: '',
    component: DynamicTableComponent
  }
];

@NgModule({
  declarations: [DynamicTableComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ]
})
export class DynamicTableModule { }
