import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorbikesComponent } from './motorbikes.component';

describe('MotorbikesComponent', () => {
  let component: MotorbikesComponent;
  let fixture: ComponentFixture<MotorbikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorbikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
