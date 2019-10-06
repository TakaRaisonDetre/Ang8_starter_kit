import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyle9Component } from './card-style9.component';

describe('CardStyle9Component', () => {
  let component: CardStyle9Component;
  let fixture: ComponentFixture<CardStyle9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStyle9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStyle9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
