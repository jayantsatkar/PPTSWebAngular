import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloatReportComponent } from './Reports/float-report/float-report.component';
import { ShelfLifeReportComponent } from './shelf-life-report/shelf-life-report.component';

const routes: Routes = [
  { path: '', component: ShelfLifeReportComponent },
  { path: 'report', component: FloatReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
