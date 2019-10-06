import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenShotComponent } from './screen-shot.component';

describe('ScreenShotComponent', () => {
  let component: ScreenShotComponent;
  let fixture: ComponentFixture<ScreenShotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenShotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
