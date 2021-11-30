import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseStartCountComponent } from './pause-start-count.component';

describe('PauseStartCountComponent', () => {
  let component: PauseStartCountComponent;
  let fixture: ComponentFixture<PauseStartCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PauseStartCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PauseStartCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
