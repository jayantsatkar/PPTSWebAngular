import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardInfoComponent } from './component/dashboard-info/dashboard-info.component';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { DrowdownComponent } from './component/drowdown/drowdown.component';
import { ProductService } from './guards/productservice';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ImageDialogComponent } from './component/image-dialog/image-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
// import { AllChartsComponent } from './component/all-charts/all-charts.component';
import { LoaderComponent } from './loader/loader.component';
import { NodataFoundComponent } from './component/nodata-found/nodata-found.component';
import { OutSideClickDirective } from './directives/out-side-click.directive';
import { CalendarModule } from 'primeng/calendar';
import { ReactiveFormsModule } from '@angular/forms';
import { DateRangeComponent } from './component/date-range/date-range.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { PlantMatrixComponent } from './component/plant-matrix/plant-matrix.component';
import { PlantMatrixInfoComponent } from './component/plant-matrix-info/plant-matrix-info.component';
import { TableModule } from 'primeng/table';
import { MatChipFilterComponent } from './component/mat-chip-filter/mat-chip-filter.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import { PlantLevelFilterComponent } from './component/plant-level-filter/plant-level-filter.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { WMYFilterComponent } from './component/wmyfilter/wmyfilter.component';
import { GlobalTableSearchComponent } from './component/global-table-search/global-table-search.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BackdropComponent } from './loader/backdrop/backdrop.component';
import { backdropService } from './services/backdrop.service';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    DashboardInfoComponent,
    DrowdownComponent,
    SidebarComponent,
    ImageDialogComponent,
    BreadcrumbComponent,
    // AllChartsComponent,
    LoaderComponent,
    NodataFoundComponent,
    OutSideClickDirective,
    DateRangeComponent,
    PlantMatrixComponent,
    PlantMatrixInfoComponent,
    MatChipFilterComponent,
    PlantLevelFilterComponent,
    WMYFilterComponent,
    GlobalTableSearchComponent,
     BackdropComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    SidebarModule,
    ButtonModule,
    DialogModule,
    MatButtonModule,
    BreadcrumbModule,
    CalendarModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    TableModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatDividerModule,
    SelectButtonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    DashboardInfoComponent,
    DrowdownComponent,
    SidebarComponent,
    BreadcrumbComponent,
   // AllChartsComponent,
    LoaderComponent,
    NodataFoundComponent,
    OutSideClickDirective,
    DateRangeComponent,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    PlantMatrixComponent,
    PlantMatrixInfoComponent,
    MatChipFilterComponent,
    TableModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatDividerModule,
    PlantLevelFilterComponent,
    WMYFilterComponent,
    GlobalTableSearchComponent,
     BackdropComponent
  ],
  providers: [ProductService,backdropService],
})
export class SharedModule {}
