import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketComplaintComponent } from './ticket-complaint.component';

describe('TicketComplaintComponent', () => {
  let component: TicketComplaintComponent;
  let fixture: ComponentFixture<TicketComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
