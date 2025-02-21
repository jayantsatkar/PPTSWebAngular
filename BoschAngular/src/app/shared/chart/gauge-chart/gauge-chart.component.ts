import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChatData, GaugeChart } from '../chart.model';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss'],
})
export class GaugeChartComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  @Input() chartData: ChatData<GaugeChart>;
  gaugeChart: Chart | undefined;
  @ViewChild('elementRef') elementRef: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @Input() doughnutData: any;
  // private _unSubscribe$: any;
  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewChecked(): void {
    this.gaugeChart?.update();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadChart();
    }, 1000);
  }

  ngOnInit(): void {
    //console.log(this.doughnutData, 'doughnutData');
  }

  loadChart() {
    if (this.gaugeChart) {
      this.gaugeChart.destroy();
    }
    //console.log(this.doughnutData, 'this.doughnutData');
    var elementRef = this.elementRef.nativeElement.getContext('2d');
    this.gaugeChart = new Chart(elementRef, this.doughnutData);
    // this.gaugeChart = new Chart(elementRef, {
    //   type: 'doughnut',
    //   data: {
    //     datasets: [
    //       {
    //         data: [89, 11],
    //         backgroundColor: ['rgba(231, 76, 60, 1)', 'rgb(255,255,255)'],
    //         borderColor: ['rgba(255, 255, 255 ,1)'],
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    //   options: {
    //     rotation: 270,
    //     circumference: 180,
    //     cutout: '90%',
    //   },
    // });
  }

  ngOnDestroy(): void {
    // this._unSubscribe$.next(undefined);
    // this._unSubscribe$.unsubscribe();

    if (this.gaugeChart) {
      this.gaugeChart.destroy();
    }
  }
}
