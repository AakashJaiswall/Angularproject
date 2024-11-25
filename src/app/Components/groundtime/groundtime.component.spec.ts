import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundtimeComponent } from './groundtime.component';

describe('GroundtimeComponent', () => {
  let component: GroundtimeComponent;
  let fixture: ComponentFixture<GroundtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroundtimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroundtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
