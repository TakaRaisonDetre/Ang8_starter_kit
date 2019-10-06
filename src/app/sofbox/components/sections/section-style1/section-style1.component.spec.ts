import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStyle1Component } from './section-style1.component';

describe('SectionStyle1Component', () => {
  let component: SectionStyle1Component;
  let fixture: ComponentFixture<SectionStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
