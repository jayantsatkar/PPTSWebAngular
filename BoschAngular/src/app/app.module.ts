import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {  } from 'primeng'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { FloatReportComponent } from './Reports/float-report/float-report.component';
@NgModule({
  declarations: [
    AppComponent,
    FloatReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
