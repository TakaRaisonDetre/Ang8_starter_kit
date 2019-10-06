import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullFeaturesComponent } from './full-features.component';

describe('FullFeaturesComponent', () => {
  let component: FullFeaturesComponent;
  let fixture: ComponentFixture<FullFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
