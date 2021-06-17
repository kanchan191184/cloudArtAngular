import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBillingComponent } from './google-billing.component';

describe('GoogleBillingComponent', () => {
  let component: GoogleBillingComponent;
  let fixture: ComponentFixture<GoogleBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
