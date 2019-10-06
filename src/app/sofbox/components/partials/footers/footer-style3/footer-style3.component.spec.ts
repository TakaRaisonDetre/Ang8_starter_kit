import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStyle3Component } from './footer-style3.component';

describe('FooterStyle3Component', () => {
  let component: FooterStyle3Component;
  let fixture: ComponentFixture<FooterStyle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterStyle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterStyle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
