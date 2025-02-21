import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './shared/guards/auth.guard';
import { MsalGuard } from '@azure/msal-angular';
import { BrowserUtils } from '@azure/msal-browser';
import { HomeComponent } from './home/home.component';
import { FailedComponent } from './failed/failed.component';
import { AppConfigGuard } from './shared/guards/AppConfigGuard';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './modules/user/login/login.component';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'user/login',
//     pathMatch: 'prefix',
//   },
//   {
//     path: '',
//     loadChildren: () =>
//       import('./modules/layout/layout.module').then((m) => m.LayoutModule),
//     canActivate: [AuthGuard],
//   },
//   {
//     path: 'user',
//     loadChildren: () =>
//       import('./modules/user/user.module').then((m) => m.UserModule),
//   },
// ];

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    //  canActivate: [AppConfigGuard],
  },
  {
    path: 'login-failed',
    component: FailedComponent,
    //  canActivate: [AppConfigGuard],
  },
  {
    path: '',
    redirectTo: 'user/login',
    pathMatch: 'prefix',
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
    // canActivate: [AuthGuard],
    // canActivate: [MsalGuard],
  },

  // AppConfigGuard?{
  //   path: '',
  //   loadChildren: () =>
  //     import('./modules/layout/layout.module').then((m) => m.LayoutModule)     ,
  //   canActivate: [AuthGuard],
  // }: {
  //   path: '',
  //   loadChildren: () =>
  //     import('./modules/layout/layout.module').then((m) => m.LayoutModule) ,
  //   canActivate:[MsalGuard]   
  // },

  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path:'login',
    component: LoginComponent
  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes, { useHash: true })],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    // Don't perform initial navigation in iframes or popups
    initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Set to enabledBlocking to use Angular Universal
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
