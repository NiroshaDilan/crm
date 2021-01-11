import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTicketComponent } from './import-ticket.component';

describe('ImportTicketComponent', () => {
  let component: ImportTicketComponent;
  let fixture: ComponentFixture<ImportTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
