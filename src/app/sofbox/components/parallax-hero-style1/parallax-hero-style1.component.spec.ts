import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxHeroStyle1Component } from './parallax-hero-style1.component';

describe('ParallaxHeroStyle1Component', () => {
  let component: ParallaxHeroStyle1Component;
  let fixture: ComponentFixture<ParallaxHeroStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxHeroStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxHeroStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
