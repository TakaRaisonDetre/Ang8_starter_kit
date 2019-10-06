import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyle8Component } from './card-style8.component';

describe('CardStyle8Component', () => {
  let component: CardStyle8Component;
  let fixture: ComponentFixture<CardStyle8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStyle8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStyle8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
