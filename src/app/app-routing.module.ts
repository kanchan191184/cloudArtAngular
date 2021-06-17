import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { AddSubscriptionComponent } from './pages/add-subscription/add-subscription.component';
import { SubscribersComponent } from './pages/subscribers/subscribers.component';
import { AddSubscriberComponent } from './pages/add-subscriber/add-subscriber.component';
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
import { AddCredentialComponent } from './pages/add-credential/add-credential.component';
import { AddMarketplaceComponent } from './pages/add-marketplace/add-marketplace.component';
import { OrganizationDetailsComponent } from './pages/organization-details/organization-details.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectenvironmentComponent } from './pages/projectenvironment/projectenvironment.component';
import { StepperComponent } from './pages/stepper/stepper.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'add-subscription', component: AddSubscriptionComponent },
  { path: 'subscribers', component: SubscribersComponent },
  { path: 'add-subscriber', component: AddSubscriberComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'subscription-preview', component: SubscriptionPreviewComponent },
  { path: 'deployment-setting', component: DeploymentSettingComponent },
  { path: 'aws-billing', component: AwsBillingComponent },
  { path: 'google-billing', component: GoogleBillingComponent },
  { path: 'cloud-billing', component: CloudBillingComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'organization-units', component: OrganizationUnitsComponent },
  { path: 'add-organization', component: AddOrganizationComponent },
  { path: 'manage-project', component: ManageProjectComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'edit-project', component: EditProjectComponent },
  {
    path: 'add-project-subscription',
    component: AddProjectSubscriptionComponent,
  },
  { path: 'add-project-subscriber', component: AddProjectSubscriberComponent },
  {
    path: 'add-project-environment',
    component: AddProjectEnvironmentComponent,
  },
  { path: 'project-settings', component: ProjectSettingsComponent },
  { path: 'organization-invoices', component: OrganizationInvoicesComponent },
  { path: 'add-credential', component: AddCredentialComponent },
  { path: 'add-marketplace', component: AddMarketplaceComponent },
  { path: 'organization-details', component: OrganizationDetailsComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
  { path: 'projectenvironment', component: ProjectenvironmentComponent },
  { path: 'stepper', component: StepperComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // {path: '**', redirectTo: '/dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
