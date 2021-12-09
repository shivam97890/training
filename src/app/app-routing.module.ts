import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'timer-two',
    loadChildren: () => import('./feature/timer-two/timer-two.module').then(m => m.TimerTwoModule)
  },
  {
    path: 'timer-one',
    loadChildren: () => import('./feature/timer-one/timer-one.module').then(m => m.TimerOneModule)
  },
  {
    path: 'grid-list-view',
    loadChildren: () => import('./feature/grid-list-view/grid-list-view.module').then(m => m.GridListViewModule)
  },
  {
    path: '',
    loadChildren: () => import('./feature/floating-banner/floating-banner.module').then(m => m.FloatingBannerModule)
  },
  {
    path: 'dynamic-table',
    loadChildren: () => import('./feature/dynamic-table/dynamic-table.module').then(m => m.DynamicTableModule)
  },
  {
    path: 'dynamic-div',
    loadChildren: () => import('./feature/dynamic-div/dynamic-div.module').then(m => m.DynamicDivModule)
  },
  {
    path: 'password-strength',
    loadChildren: () => import('./feature/password-strength/password-strength.module').then(m => m.PasswordStrengthModule)
  },
  {
    path: 'age-calculator',
    loadChildren: () => import('./feature/age-calculator/age-calculator.module').then(m => m.AgeCalculatorModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
