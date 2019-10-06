import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStyleComponent } from './section-style.component';

describe('SectionStyleComponent', () => {
  let component: SectionStyleComponent;
  let fixture: ComponentFixture<SectionStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
