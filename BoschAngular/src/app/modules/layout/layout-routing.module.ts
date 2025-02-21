import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
//import { PlantDetailsModule } from '../plant-details/plant-details.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LayoutComponent,
      },
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('../plant-details/plant-details.module').then(
      //       (m) => m.PlantDetailsModule
      //     ),
      // },
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('../upload/upload.module').then((m) => m.UploadModule),
      // },
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('../plants/plants.module').then((m) => m.PlantsModule),
      // },
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('../all-reports/all-reports.module').then(
      //       (m) => m.AllReportsModule
      //     ),
      // },
      // {
      //   path: 'home/plants',
      //   loadChildren: () =>
      //     import('../focus-factory/focus-factory.module').then(
      //       (m) => m.FocusFactoryModule
      //     ),
      // },
      
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('../plant-details/plant-details.module').then(
      //       (m) => m.PlantDetailsModule
      //     ),
      // },
      // {
      //   path: 'home/Rybnik',
      //   loadChildren: () =>
      //     import('../focus-factory/focus-factory.module').then(
      //       (m) => m.FocusFactoryModule
      //     ),
      // },
      // {
      //   path: 'home/Rybnik/focusfactory',
      //   loadChildren: () =>
      //     import('../zone-details/zone-details.module').then(
      //       (m) => m.ZoneDetailsModule
      //     ),
      // },
      // {
      //   path: 'home/Rybnik/focusfactory/zone',
      //   loadChildren: () =>
      //     import('../line-details/line-details.module').then(
      //       (m) => m.LineDetailsModule
      //     ),
      // },
      /**
       *  End Plant Details
       */
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('../../modules/hourlydetails/hourlydetails.module').then(
      //       (m) => m.HourlydetailsModule
      //     ),
      // },
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('../../modules/oee-dashboard/oee-dashboard.module').then(
      //       (m) => m.OeeDashboardModule
      //     ),
      // },
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('../../modules/meantimereport/meantimereport.module').then(
      //       (m) => m.MeantimereportModule
      //     ),
      // },
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import(
      //       '../../modules/meantime-to-request/meantime-to-request.module'
      //     ).then((m) => m.MeantimeToRequestModule),
      // },
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import(
      //       '../../modules/meantimeacknowledgement/meantimeacknowledgement.module'
      //     ).then((m) => m.MeantimeacknowledgementModule),
      // },
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('../../modules/schedulereport/schedulereport.module').then(
      //       (m) => m.SchedulereportModule
      //     ),
      // },
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('../../modules/dashboard/dashboard.module').then(
      //       (m) => m.DashboardModule
      //     ),
      // },
      // {
      //   path: 'quality-management',
      //   loadChildren: () =>
      //     import('../qaulity-management/qaulity-management.module').then(
      //       (m) => m.QaulityManagementModule
      //     ),
      // },
      // {
      //   path: 'operator-training',
      //   loadChildren: () =>
      //     import('../operator-training/operator-training.module').then(
      //       (m) => m.OperatorTrainingModule
      //     ),
      // },
      // {
      //   path: 'asset-management',
      //   loadChildren: () =>
      //     import('../asset-management/asset-management.module').then(
      //       (m) => m.AssetManagementModule
      //     ),
      // },
      // {
      //   path: 'route-config',
      //   loadChildren: () =>
      //     import('../route-config/route-config.module').then(
      //       (m) => m.RouteConfigModule
      //     ),
      // },
      // {
      //   path: 'quality',
      //   loadChildren: () =>
      //     import('../quality/quality.module').then((m) => m.QualityModule),
      // },
      // {
      //   path: 'energy',
      //   loadChildren: () =>
      //     import('../energy/energy.module').then((m) => m.EnergyModule),
      // },
      // {
      //   path: 'oae',
      //   loadChildren: () =>
      //     import('../oae-dashboard/oae-dashboard.module').then((m) => m.OaeDashboardModule),
      // },
      // {
      //   path: 'traceability',
      //   loadChildren: () =>
      //     import('../traceability/traceability.module').then((m) => m.TraceabilityModule),
      // },   
       
      {
        path: 'admin-utility',
        loadChildren: () =>
          import('../admin-utility/admin-utility.module').then(
            (m) => m.AdminUtilityModule
          ),
      }, 
      {
        path: 'master',
        loadChildren: () =>
          import('../master-details/master-details.module').then(
            (m) => m.MasterDetailsModule
          ),
      },  

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
