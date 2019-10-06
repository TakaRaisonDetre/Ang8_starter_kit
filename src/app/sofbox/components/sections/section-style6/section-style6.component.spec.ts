import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStyle6Component } from './section-style6.component';

describe('SectionStyle6Component', () => {
  let component: SectionStyle6Component;
  let fixture: ComponentFixture<SectionStyle6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionStyle6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStyle6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
