import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAddressComponent } from './footer-address.component';

describe('FooterAddressComponent', () => {
  let component: FooterAddressComponent;
  let fixture: ComponentFixture<FooterAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
