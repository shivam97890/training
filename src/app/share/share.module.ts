import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTimerComponent } from './components/display-timer/display-timer.component';
import { StartStopResetTimerComponent } from './components/start-stop-reset-timer/start-stop-reset-timer.component';
import { TimeStampsComponent } from './components/time-stamps/time-stamps.component';
import { PauseStartCountComponent } from './components/pause-start-count/pause-start-count.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { KeysPipe } from './pipes/keys.pipe';
import { SmartTableComponent } from './components/smart-table/smart-table.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    DisplayTimerComponent,
    StartStopResetTimerComponent,
    TimeStampsComponent,
    PauseStartCountComponent,
    CardComponent,
    KeysPipe,
    SmartTableComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[
    DisplayTimerComponent,
    StartStopResetTimerComponent,
    TimeStampsComponent,
    PauseStartCountComponent,
    CardComponent,
    FormsModule,
    KeysPipe,
    SmartTableComponent,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ShareModule { }
