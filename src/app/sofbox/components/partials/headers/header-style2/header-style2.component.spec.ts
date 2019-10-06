import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyle2Component } from './header-style2.component';

describe('HeaderStyle2Component', () => {
  let component: HeaderStyle2Component;
  let fixture: ComponentFixture<HeaderStyle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderStyle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
