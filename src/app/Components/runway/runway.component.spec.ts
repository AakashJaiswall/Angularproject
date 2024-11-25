import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunwayComponent } from './runway.component';

describe('RunwayComponent', () => {
  let component: RunwayComponent;
  let fixture: ComponentFixture<RunwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunwayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
