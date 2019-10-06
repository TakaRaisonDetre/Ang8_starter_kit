import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCustomizerComponent } from './color-customizer.component';

describe('ColorCustomizerComponent', () => {
  let component: ColorCustomizerComponent;
  let fixture: ComponentFixture<ColorCustomizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCustomizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
