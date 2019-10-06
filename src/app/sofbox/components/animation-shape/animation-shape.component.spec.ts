import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationShapeComponent } from './animation-shape.component';

describe('AnimationShapeComponent', () => {
  let component: AnimationShapeComponent;
  let fixture: ComponentFixture<AnimationShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
