import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbModule } from 'primeng/breadcrumb';
//import { SharedModule } from '../../src/app/shared/shared.module';
import {SharedModule} from '../../shared/shared.module'
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BreadcrumbModule,
    SharedModule
  ],
})
export class UserModule {}
