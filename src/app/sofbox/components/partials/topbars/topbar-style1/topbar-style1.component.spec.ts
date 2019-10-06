import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarStyle1Component } from './topbar-style1.component';

describe('TopbarStyle1Component', () => {
  let component: TopbarStyle1Component;
  let fixture: ComponentFixture<TopbarStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
