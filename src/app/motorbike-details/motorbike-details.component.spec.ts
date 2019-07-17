import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorbikeDetailsComponent } from './motorbike-details.component';

describe('MotorbikeDetailsComponent', () => {
  let component: MotorbikeDetailsComponent;
  let fixture: ComponentFixture<MotorbikeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorbikeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorbikeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
