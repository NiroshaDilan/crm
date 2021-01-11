import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customer360ModalComponent } from './customer360-modal.component';

describe('Customer360ModalComponent', () => {
  let component: Customer360ModalComponent;
  let fixture: ComponentFixture<Customer360ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Customer360ModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Customer360ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
