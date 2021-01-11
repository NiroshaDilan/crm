import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalBankingComponent } from './digital-banking.component';

describe('DigitalBankingComponent', () => {
  let component: DigitalBankingComponent;
  let fixture: ComponentFixture<DigitalBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalBankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
