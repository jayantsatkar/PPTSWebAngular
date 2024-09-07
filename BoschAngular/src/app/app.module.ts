import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {  } from 'primeng'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { FloatReportComponent } from './Reports/float-report/float-report.component';
import { ConfigService } from './Services/config.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { AuthInterceptor } from './Services/auth.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function initialiseApp(configService: ConfigService):()=> Promise<void>{
  return() => configService.loadConfig();
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
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
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
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
