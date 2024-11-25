import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeperformanceComponent } from './timeperformance.component';

describe('TimeperformanceComponent', () => {
  let component: TimeperformanceComponent;
  let fixture: ComponentFixture<TimeperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeperformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
