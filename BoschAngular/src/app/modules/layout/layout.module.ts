import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { NavSidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//import { DarkModeToggleComponent } from 'src/app/shared/component/dark-mode-toggle/dark-mode-toggle.component';
import { DarkModeToggleComponent } from '../../shared/component/dark-mode-toggle/dark-mode-toggle.component';

import { DataShareService } from '../../shared/services/data.share.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NavSidebarComponent,
    FooterComponent,
    DarkModeToggleComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatListModule,
    MatExpansionModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  
})
export class LayoutModule {}
