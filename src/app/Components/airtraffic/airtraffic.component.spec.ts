import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtrafficComponent } from './airtraffic.component';

describe('AirtrafficComponent', () => {
  let component: AirtrafficComponent;
  let fixture: ComponentFixture<AirtrafficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirtrafficComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirtrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
