import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutchartsComponent } from './donutcharts.component';

describe('DonutchartsComponent', () => {
  let component: DonutchartsComponent;
  let fixture: ComponentFixture<DonutchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
