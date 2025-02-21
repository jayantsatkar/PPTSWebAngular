import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  weeklyChartSub = new Subject<any>();
  oaeSelectedCategorySub = new BehaviorSubject<any>("Division");
  oaeSelectedPlantCategorySub = new BehaviorSubject<any>("Division");

  oaeTableSub = new Subject<any>();
  shareDownTimeTableSub = new Subject<any>();
  hourlyProductionsSub = new Subject<any>();

  sharePlantMapsSub = new Subject<any>();
  sharePaginationSub = new Subject<any>();

  breadcrumbsPayloadSub = new BehaviorSubject<any>("");
  constructor() {}

  weeklyChartDataShared(data: any) {
    this.weeklyChartSub.next(data);
  }

  oaeTableData(data: any) {
    this.oaeTableSub.next(data);
  }

  oaeSelectedCategory(data: any) {
    this.oaeSelectedCategorySub.next(data);
  }

  oaeSelectedPlantCategory(data: any) {
    this.oaeSelectedPlantCategorySub.next(data);
  }

  hourlyProductionsData(data: any) {
    this.hourlyProductionsSub.next(data);
  }

  shareDownTimeTableData(data: any) {
    this.shareDownTimeTableSub.next(data);
  }

  sharePaginationData(data: any) {
    this.sharePaginationSub.next(data);
  }

  shareMapPlantData(data: any) {
    this.sharePlantMapsSub.next(data);
  }

  shareBreadcrumbsPayload(payload: any) {
    this.breadcrumbsPayloadSub.next(payload);
  }

}
