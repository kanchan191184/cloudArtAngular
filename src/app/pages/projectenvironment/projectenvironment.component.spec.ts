import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectenvironmentComponent } from './projectenvironment.component';

describe('ProjectenvironmentComponent', () => {
  let component: ProjectenvironmentComponent;
  let fixture: ComponentFixture<ProjectenvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectenvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectenvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
