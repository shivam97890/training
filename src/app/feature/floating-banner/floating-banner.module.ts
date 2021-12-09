import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingBannerComponent } from './floating-banner.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FloatingBannerComponent
  }
];

@NgModule({
  declarations: [FloatingBannerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FloatingBannerModule { }
