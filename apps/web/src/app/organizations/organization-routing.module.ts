import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "@bitwarden/angular/guards/auth.guard";

import { PermissionsGuard } from "./guards/permissions.guard";
import { OrganizationLayoutComponent } from "./layouts/organization-layout.component";
import { GroupsComponent } from "./manage/groups.component";
import { PeopleComponent } from "./manage/people.component";
import { NavigationPermissionsService } from "./services/navigation-permissions.service";
import { VaultModule } from "./vault/vault.module";

const routes: Routes = [
  {
    path: ":organizationId",
    component: OrganizationLayoutComponent,
    canActivate: [AuthGuard, PermissionsGuard],
    data: {
      permissions: NavigationPermissionsService.getPermissions("admin"),
    },
    children: [
      { path: "", pathMatch: "full", redirectTo: "vault" },
      {
        path: "vault",
        loadChildren: () => VaultModule,
      },
      {
        path: "settings",
        loadChildren: () =>
          import("../organizations/settings/organization-settings.module").then(
            (m) => m.OrganizationSettingsModule
          ),
      },
      {
        path: "members",
        component: PeopleComponent,
        canActivate: [PermissionsGuard],
        data: {
          titleId: "members",
          permissions: NavigationPermissionsService.getPermissions("members"),
        },
      },
      {
        path: "groups",
        component: GroupsComponent,
        canActivate: [PermissionsGuard],
        data: {
          titleId: "groups",
          permissions: NavigationPermissionsService.getPermissions("groups"),
        },
      },
      {
        path: "reporting",
        loadChildren: () =>
          import("./reporting/organization-reporting.module").then(
            (m) => m.OrganizationReportingModule
          ),
      },
      {
        path: "billing",
        loadChildren: () =>
          import("./billing/organization-billing.module").then((m) => m.OrganizationBillingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationsRoutingModule {}
