import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloatReportComponent } from './Reports/float-report/float-report.component';
import { ShelfLifeReportComponent } from './shelf-life-report/shelf-life-report.component';
import { HomeComponent } from './home/home.component';
import { FailedComponent } from './failed/failed.component';
import { BrowserUtils } from '@azure/msal-browser';
import { LoginComponent } from './modules/user/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login-failed', component: FailedComponent },
  { path: '', redirectTo: 'user/login', pathMatch: 'prefix', },
  { path: '', loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule), },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule), },
  { path: 'login', component: LoginComponent },
  { path: 'report', component: FloatReportComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    // Don't perform initial navigation in iframes or popups
    initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Set to enabledBlocking to use Angular Universal
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
