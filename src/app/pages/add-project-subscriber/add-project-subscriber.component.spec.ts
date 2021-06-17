import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectSubscriberComponent } from './add-project-subscriber.component';

describe('AddProjectSubscriberComponent', () => {
  let component: AddProjectSubscriberComponent;
  let fixture: ComponentFixture<AddProjectSubscriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectSubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
