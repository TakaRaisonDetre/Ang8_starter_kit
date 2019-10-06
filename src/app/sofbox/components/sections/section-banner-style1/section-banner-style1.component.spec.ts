import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBannerStyle1Component } from './section-banner-style1.component';

describe('SectionBannerStyle1Component', () => {
  let component: SectionBannerStyle1Component;
  let fixture: ComponentFixture<SectionBannerStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBannerStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBannerStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
