import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCardStyle2Component } from './pricing-card-style2.component';

describe('PricingCardStyle2Component', () => {
  let component: PricingCardStyle2Component;
  let fixture: ComponentFixture<PricingCardStyle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingCardStyle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingCardStyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
