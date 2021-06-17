import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectEnvironmentComponent } from './add-project-environment.component';

describe('AddProjectEnvironmentComponent', () => {
  let component: AddProjectEnvironmentComponent;
  let fixture: ComponentFixture<AddProjectEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
