import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyCardsComponent } from './fancy-cards.component';

describe('FancyCardsComponent', () => {
  let component: FancyCardsComponent;
  let fixture: ComponentFixture<FancyCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
