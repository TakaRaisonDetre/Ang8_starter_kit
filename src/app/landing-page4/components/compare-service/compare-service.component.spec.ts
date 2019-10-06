import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareServiceComponent } from './compare-service.component';

describe('CompareServiceComponent', () => {
  let component: CompareServiceComponent;
  let fixture: ComponentFixture<CompareServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
