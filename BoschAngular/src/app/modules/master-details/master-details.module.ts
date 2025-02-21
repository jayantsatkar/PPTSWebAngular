import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDetailsRoutingModule } from './master-details-routing.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TagModule } from 'primeng/tag';
// import { SharedModule } from 'src/app/shared/shared.module';
import { SharedModule } from '../../shared/shared.module'
// import { ChartModule } from 'src/app/shared/chart/chart.module';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { InputTextModule } from 'primeng/inputtext';
import { SlideMenuModule } from 'primeng/slidemenu';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { PartConfigurationComponent } from './part-configuration/part-configuration.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    CustomerDetailsComponent,
    PartConfigurationComponent,
    CreateCustomerComponent,
    PartConfigurationComponent
  ],
  imports: [
    MasterDetailsRoutingModule,
    CommonModule,
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
    //ChartModule,
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
})
export class MasterDetailsModule { }
