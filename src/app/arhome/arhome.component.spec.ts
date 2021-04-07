import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhomeComponent } from './arhome.component';

describe('ArhomeComponent', () => {
  let component: ArhomeComponent;
  let fixture: ComponentFixture<ArhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
