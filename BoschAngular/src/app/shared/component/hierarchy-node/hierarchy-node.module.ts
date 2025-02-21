import { NgModule } from '@angular/core';
import { OaeFilterComponent } from './oae-filter/oae-filter.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { NodeContainerComponent } from './node-container/node-container.component';
import { RecursiveItemComponent } from './recursive-item/recursive-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    OaeFilterComponent,
    NodeContainerComponent,
    RecursiveItemComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OaeFilterComponent,
      },
    ]),
  ],
  exports: [OaeFilterComponent],
})
export class HierarchyNodeModule {}
