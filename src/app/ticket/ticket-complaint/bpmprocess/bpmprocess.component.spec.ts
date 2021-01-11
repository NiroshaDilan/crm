import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPMProcessComponent } from './bpmprocess.component';

describe('BPMProcessComponent', () => {
  let component: BPMProcessComponent;
  let fixture: ComponentFixture<BPMProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPMProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BPMProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
