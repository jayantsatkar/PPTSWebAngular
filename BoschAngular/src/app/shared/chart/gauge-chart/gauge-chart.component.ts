import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';


@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss'],
})
export class GaugeChartComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
 
  constructor() {
   
  }

  ngAfterViewChecked(): void {
 
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
     // this.loadChart();
    }, 1000);
  }

  ngOnInit(): void {
    //console.log(this.doughnutData, 'doughnutData');
  }

  

  ngOnDestroy(): void {
    // this._unSubscribe$.next(undefined);
    // this._unSubscribe$.unsubscribe();

    
  }
}
