import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStyle1Component } from './about-style1.component';

describe('AboutStyle1Component', () => {
  let component: AboutStyle1Component;
  let fixture: ComponentFixture<AboutStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
