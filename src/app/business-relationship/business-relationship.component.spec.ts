import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRelationshipComponent } from './business-relationship.component';

describe('BusinessRelationshipComponent', () => {
  let component: BusinessRelationshipComponent;
  let fixture: ComponentFixture<BusinessRelationshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessRelationshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
