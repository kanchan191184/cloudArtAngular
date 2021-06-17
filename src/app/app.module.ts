import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SidebarMenuComponent } from './pages/sidebar-menu/sidebar-menu.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { AddSubscriptionComponent } from './pages/add-subscription/add-subscription.component';
import { ArchwizardModule } from 'angular-archwizard';
import { SubscribersComponent } from './pages/subscribers/subscribers.component';
import { AddSubscriberComponent } from './pages/add-subscriber/add-subscriber.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SubscriptionPreviewComponent } from './pages/subscription-preview/subscription-preview.component';
import { DeploymentSettingComponent } from './pages/deployment-setting/deployment-setting.component';
import { GoogleBillingComponent } from './pages/google-billing/google-billing.component';
import { AwsBillingComponent } from './pages/aws-billing/aws-billing.component';
import { CloudBillingComponent } from './pages/cloud-billing/cloud-billing.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { OrganizationUnitsComponent } from './pages/organization-units/organization-units.component';
import { AddOrganizationComponent } from './pages/add-organization/add-organization.component';
import { ManageProjectComponent } from './pages/manage-project/manage-project.component';
import { AddProjectComponent } from './pages/add-project/add-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { AddProjectSubscriptionComponent } from './pages/add-project-subscription/add-project-subscription.component';
import { AddProjectSubscriberComponent } from './pages/add-project-subscriber/add-project-subscriber.component';
import { AddProjectEnvironmentComponent } from './pages/add-project-environment/add-project-environment.component';
import { ProjectSettingsComponent } from './pages/project-settings/project-settings.component';
import { OrganizationInvoicesComponent } from './pages/organization-invoices/organization-invoices.component';
import { NgSelect2Module } from 'ng-select2';
import { AddCredentialComponent } from './pages/add-credential/add-credential.component';
import { AddMarketplaceComponent } from './pages/add-marketplace/add-marketplace.component';
import { OrganizationDetailsComponent } from './pages/organization-details/organization-details.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectenvironmentComponent } from './pages/projectenvironment/projectenvironment.component';
import { StepperComponent } from './pages/stepper/stepper.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarMenuComponent,
    SubscriptionComponent,
    AddSubscriptionComponent,
    SubscribersComponent,
    AddSubscriberComponent,
    ProfileComponent,
    ResetPasswordComponent,
    SubscriptionPreviewComponent,
    DeploymentSettingComponent,
    GoogleBillingComponent,
    AwsBillingComponent,
    CloudBillingComponent,
    ResourcesComponent,
    OrganizationUnitsComponent,
    AddOrganizationComponent,
    ManageProjectComponent,
    AddProjectComponent,
    EditProjectComponent,
    AddProjectSubscriptionComponent,
    AddProjectSubscriberComponent,
    AddProjectEnvironmentComponent,
    ProjectSettingsComponent,
    OrganizationInvoicesComponent,
    AddCredentialComponent,
    AddMarketplaceComponent,
    OrganizationDetailsComponent,
    ProjectDetailsComponent,
    ProjectenvironmentComponent,
	StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    ArchwizardModule,
    DpDatePickerModule,
    NgSelect2Module
  ],
  providers: [NgSelect2Module],
  bootstrap: [AppComponent]
})
export class AppModule { }
