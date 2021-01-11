import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketComplaintOverviewComponent } from './ticket-complaint-overview.component';

describe('TicketComplaintOverviewComponent', () => {
  let component: TicketComplaintOverviewComponent;
  let fixture: ComponentFixture<TicketComplaintOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketComplaintOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketComplaintOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
