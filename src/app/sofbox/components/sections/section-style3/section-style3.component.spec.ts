import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStyle3Component } from './section-style3.component';

describe('SectionStyle3Component', () => {
  let component: SectionStyle3Component;
  let fixture: ComponentFixture<SectionStyle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionStyle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStyle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
