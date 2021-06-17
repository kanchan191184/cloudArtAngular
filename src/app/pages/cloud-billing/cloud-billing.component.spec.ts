import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudBillingComponent } from './cloud-billing.component';

describe('CloudBillingComponent', () => {
  let component: CloudBillingComponent;
  let fixture: ComponentFixture<CloudBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
