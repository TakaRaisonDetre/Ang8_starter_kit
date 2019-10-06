import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStyle2Component } from './section-style2.component';

describe('SectionStyle2Component', () => {
  let component: SectionStyle2Component;
  let fixture: ComponentFixture<SectionStyle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionStyle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
