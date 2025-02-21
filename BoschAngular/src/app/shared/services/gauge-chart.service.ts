import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GaugeChartService {
  private _gaugeChartData: any[];
  private _destoryGaugeChartIfNeed: boolean;
  constructor() {}

  set destoryGaugeChartIfNeed(value: boolean) {
    this._destoryGaugeChartIfNeed = value;
  }

  get destoryGaugeChartIfNeed() {
    return this._destoryGaugeChartIfNeed;
  }

  set gaugeChartData(value: any[]) {
    this._gaugeChartData = value;
  }
  get gaugeChartData() {
    return this._gaugeChartData;
  }
}
