import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectSubscriptionComponent } from './add-project-subscription.component';

describe('AddProjectSubscriptionComponent', () => {
  let component: AddProjectSubscriptionComponent;
  let fixture: ComponentFixture<AddProjectSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
