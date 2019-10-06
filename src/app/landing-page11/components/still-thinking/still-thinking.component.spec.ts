import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StillThinkingComponent } from './still-thinking.component';

describe('StillThinkingComponent', () => {
  let component: StillThinkingComponent;
  let fixture: ComponentFixture<StillThinkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StillThinkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StillThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
