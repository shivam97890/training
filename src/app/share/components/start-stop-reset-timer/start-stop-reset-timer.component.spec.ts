import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartStopResetTimerComponent } from './start-stop-reset-timer.component';

describe('StartStopResetTimerComponent', () => {
  let component: StartStopResetTimerComponent;
  let fixture: ComponentFixture<StartStopResetTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartStopResetTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartStopResetTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
