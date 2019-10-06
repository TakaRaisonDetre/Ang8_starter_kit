import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxVideoStyle2Component } from './parallax-video-style2.component';

describe('ParallaxVideoStyle2Component', () => {
  let component: ParallaxVideoStyle2Component;
  let fixture: ComponentFixture<ParallaxVideoStyle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxVideoStyle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxVideoStyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
