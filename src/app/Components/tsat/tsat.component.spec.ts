import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsatComponent } from './tsat.component';

describe('TsatComponent', () => {
  let component: TsatComponent;
  let fixture: ComponentFixture<TsatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
