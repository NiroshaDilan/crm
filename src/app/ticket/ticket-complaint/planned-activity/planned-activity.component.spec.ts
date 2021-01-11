import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedActivityComponent } from './planned-activity.component';

describe('PlannedActivityComponent', () => {
  let component: PlannedActivityComponent;
  let fixture: ComponentFixture<PlannedActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannedActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
