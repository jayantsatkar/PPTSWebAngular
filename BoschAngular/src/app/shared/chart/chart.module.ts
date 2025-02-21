import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [GaugeChartComponent],
  imports: [CommonModule,  CardModule],
  exports: [GaugeChartComponent],
})
export class ChartModule {}
