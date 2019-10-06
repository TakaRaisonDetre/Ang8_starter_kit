import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyle7Component } from './card-style7.component';

describe('CardStyle7Component', () => {
  let component: CardStyle7Component;
  let fixture: ComponentFixture<CardStyle7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStyle7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStyle7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
