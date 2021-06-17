import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsBillingComponent } from './aws-billing.component';

describe('AwsBillingComponent', () => {
  let component: AwsBillingComponent;
  let fixture: ComponentFixture<AwsBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
