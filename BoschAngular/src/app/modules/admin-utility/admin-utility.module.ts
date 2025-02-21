import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUtilityRoutingModule } from './admin-utility-routing.module';
import { RolesManagementComponent } from './roles-management/roles-management.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
// import { OeeTeepReportComponent } from './oee-teep-report/oee-teep-report.component';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import {SharedModule} from '../../shared/shared.module'
//import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from '../../shared/chart/chart.module';
import { CardModule } from 'primeng/card';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { InputTextModule } from 'primeng/inputtext';
// import { HierarchyPlantInfoComponent } from './hierarchy-plant-info/hierarchy-plant-info.component';
import { SlideMenuModule } from 'primeng/slidemenu';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { HierarchyNodeModule } from '../../shared/component/hierarchy-node/hierarchy-node.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PaginatorModule } from 'primeng/paginator';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';

import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { UserManagementComponent } from './user-management/user-management.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RoleAuthorizationComponent } from './role-authorization/role-authorization.component';
import { MatMenuModule } from '@angular/material/menu';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { RouterModule } from '@angular/router';
import { ImportRoleComponent } from './import-role/import-role.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    RolesManagementComponent,
    UserManagementComponent,
    CreateUserComponent,
    RoleAuthorizationComponent,
    AdminDashboardComponent,
    CreateRoleComponent,
    ImportRoleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminUtilityRoutingModule,
    BreadcrumbModule,
    DividerModule,
    ProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    MatAutocompleteModule,
    MatChipsModule,
    TagModule,
    SharedModule,
    ChartModule,
    CheckboxModule,
    CardModule,
    OverlayPanelModule,
    ButtonModule,
    ChipsModule,
    InputTextModule,
    SlideMenuModule,
    CalendarModule,
    CascadeSelectModule,
    TieredMenuModule,
    PanelMenuModule,
    //HierarchyNodeModule,
    MatSlideToggleModule,
    MatMenuModule,
    PaginatorModule,
    SelectButtonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  //exports:[ClickOutsideDirective],
  providers: [],
})
export class AdminUtilityModule { }
