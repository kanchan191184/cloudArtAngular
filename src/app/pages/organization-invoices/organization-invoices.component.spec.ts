import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationInvoicesComponent } from './organization-invoices.component';

describe('OrganizationInvoicesComponent', () => {
  let component: OrganizationInvoicesComponent;
  let fixture: ComponentFixture<OrganizationInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
