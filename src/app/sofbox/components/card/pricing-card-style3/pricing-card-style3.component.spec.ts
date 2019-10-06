import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCardStyle3Component } from './pricing-card-style3.component';

describe('PricingCardStyle3Component', () => {
  let component: PricingCardStyle3Component;
  let fixture: ComponentFixture<PricingCardStyle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingCardStyle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingCardStyle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
