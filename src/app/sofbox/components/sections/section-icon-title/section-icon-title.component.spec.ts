import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIconTitleComponent } from './section-icon-title.component';

describe('SectionIconTitleComponent', () => {
  let component: SectionIconTitleComponent;
  let fixture: ComponentFixture<SectionIconTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionIconTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionIconTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
