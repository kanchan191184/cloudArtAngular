import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketplaceComponent } from './add-marketplace.component';

describe('AddMarketplaceComponent', () => {
  let component: AddMarketplaceComponent;
  let fixture: ComponentFixture<AddMarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
