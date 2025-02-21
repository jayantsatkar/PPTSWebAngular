import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesManagementComponent } from './roles-management/roles-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RoleAuthorizationComponent } from './role-authorization/role-authorization.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ImportRoleComponent } from './import-role/import-role.component';


const routes: Routes = [
  {
    path: 'role-management',
    component: RolesManagementComponent
  },
  {
    path: 'user-management',
    component: UserManagementComponent
  },
  {
    path: 'role-authorization',
    component: RoleAuthorizationComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'role-management/create-roles',
    component: CreateRoleComponent
  },
  {
    path: 'user-management/create-user',
    component: CreateUserComponent
  },
  {
    path: 'role-management/import-role',
    component: ImportRoleComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUtilityRoutingModule { }
