import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareServicesComponent } from './compare-services.component';

describe('CompareServicesComponent', () => {
  let component: CompareServicesComponent;
  let fixture: ComponentFixture<CompareServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
