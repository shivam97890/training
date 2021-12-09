import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeCalculatorComponent } from './age-calculator.component';
import { Routes,RouterModule } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
const routes: Routes = [
  {
    path: '',
    component: AgeCalculatorComponent
  }
];

@NgModule({
  declarations: [AgeCalculatorComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ]
})
export class AgeCalculatorModule { }
