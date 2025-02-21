import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { PartConfigurationComponent } from './part-configuration/part-configuration.component';

const routes: Routes = [
  {
    path:'customer',
    component:CustomerDetailsComponent
  },
  {
    path: 'part-number-configuration',
    component:PartConfigurationComponent
  },

  {
    path: 'create-customer',
    component: CreateCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDetailsRoutingModule { }

