import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {  } from 'primeng'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { FloatReportComponent } from './Reports/float-report/float-report.component';
//import { ConfigService } from './Services/config.service';
//import {ConfigService} from './shared/services/config.service'
import {JsonService} from './shared/services/json.service'

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './Services/auth.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { ShelfLifeReportComponent } from './shelf-life-report/shelf-life-report.component';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
//import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IPublicClientApplication, PublicClientApplication, InteractionType, BrowserCacheLocation, LogLevel } from '@azure/msal-browser';
import { MsalGuard, MsalInterceptor, MsalBroadcastService, MsalInterceptorConfiguration, MsalModule, MsalService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalGuardConfiguration, MsalRedirectComponent } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';
import { FailedComponent } from './failed/failed.component';
import { SlideMenuBackDirective } from './shared/directives/slide-menu-back.directive';
import { ReactiveFormsModule } from '@angular/forms';

export function initialiseApp(configService: JsonService): () => Promise<void> {
  return () => configService.loadConfig();
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Configure for SSO
const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1; // Remove this line to use Angular Universal

export function loggerCallback(logLevel: LogLevel, message: string) {

}

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({

    auth: {
      // //Edenkoben
      clientId: 'b1793741-48f4-4cf9-bd4c-ca07db4b2ccf',
      authority: "https://login.microsoftonline.com/6eec918b-f654-44a7-ac1a-abfdb64e694e",
      redirectUri: 'https://ede-reports.tenneco.com',
      postLogoutRedirectUri: 'https://ede-reports.tenneco.com'

      //UAT Server
      // clientId: '2a39c237-b45c-4070-a6c1-827dfa08fbd7',
      // authority: "https://login.microsoftonline.com/6eec918b-f654-44a7-ac1a-abfdb64e694e",
      // redirectUri: 'https://bi.dev.mes.tenneco.io',
      // postLogoutRedirectUri: 'https://bi.dev.mes.tenneco.io'
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: isIE, // set to true for IE 11. Remove this line to use Angular Universal
    },
    system: {
      loggerOptions: {
        loggerCallback,
        logLevel: LogLevel.Info,
        piiLoggingEnabled: false
      }
    }
  });
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read']);
  // protectedResourceMap.set('https://graph.microsoft-ppe.com/v1.0/me', ['user.read']); // PPE testing environment

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {

  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: ['user.read']
    },
    loginFailedRoute: '/login-failed'
  };
}
// export function initializeApp(jsonService: JsonService): () => Promise<void> {
//   return () => jsonService.loadConfig();
// }

@NgModule({
  declarations: [
    AppComponent,
    FloatReportComponent,
    ShelfLifeReportComponent, SlideMenuBackDirective, HomeComponent, FailedComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
    RippleModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({ loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] } }),
    TableModule,
    DropdownModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    ReactiveFormsModule,
    MsalModule,
  ],
  providers: [MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: initialiseApp,
      deps: [JsonService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
