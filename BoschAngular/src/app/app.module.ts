import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {  } from 'primeng'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { FloatReportComponent } from './Reports/float-report/float-report.component';
import { ConfigService } from './Services/config.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { AuthInterceptor } from './Services/auth.interceptor';
export function initialiseApp(configService: ConfigService):()=> Promise<void>{
  return() => configService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    FloatReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass : AuthInterceptor, multi : true},
    { provide :LocationStrategy, useClass: HashLocationStrategy},
    {
      provide : APP_INITIALIZER,
      useFactory : initialiseApp,
      deps:[ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
