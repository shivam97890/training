import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PasswordStrengthComponent } from './password-strength.component';
import { ShareModule } from 'src/app/share/share.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
const routes: Routes = [
  {
    path: '',
    component: PasswordStrengthComponent
  }
];

@NgModule({
  declarations: [
    PasswordStrengthComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class PasswordStrengthModule { }
