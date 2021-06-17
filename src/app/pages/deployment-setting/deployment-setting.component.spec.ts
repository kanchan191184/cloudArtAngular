import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentSettingComponent } from './deployment-setting.component';

describe('DeploymentSettingComponent', () => {
  let component: DeploymentSettingComponent;
  let fixture: ComponentFixture<DeploymentSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
