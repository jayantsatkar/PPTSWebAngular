import { EventEmitter, Injectable } from '@angular/core';
import { BreadcrumItem } from 'src/app/modules/model/enterprise-root-node.model';
import { DataShareService } from './data.share.service';
import { EnterpriseFilters } from 'src/app/modules/model/enterprise-filters.model';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class OaedashboardService {
  onBreadcrumbHomeClick$ = new EventEmitter();
  private _oaeColor: any;
  private _availability: any;
  private _isForward: boolean;
  private _currentSelectedNodeType: string;
  constructor(private sharedService: DataShareService) {}
  
  defaultBreadcrumItem() {
    return {
      label: 'Tenneco',
      command: () => this._onBreaCrumbHomeClick(),
    };
  }

  payLoad(breadcrumItem: BreadcrumItem[]): EnterpriseFilters {
    let filterQuery = {
      enterprise: '1',
      fromDate: this.sharedService.fromDate,
      toDate: this.sharedService.toDate,
    } as EnterpriseFilters;

    breadcrumItem.map((payload) => {
      switch (payload.type) {
        case 'division':
          filterQuery.division = payload.key || '';
          break;
        case 'plant':
          filterQuery.plant = payload.key || '';
          break;
        case 'focusFactory':
          filterQuery.focusFactory = payload.key || '';
          break;
        case 'zone':
          filterQuery.zone = payload.key || '';
          break;
        case 'line':
          filterQuery.line = payload.key || '';
          break;
        case 'shift':
          filterQuery.shift = payload.key || '';
          break;
      }
    });
    return filterQuery;
  }

  private _onBreaCrumbHomeClick() {
    this.onBreadcrumbHomeClick$.next({
      enterprise: '1',
      fromDate: this.sharedService.fromDate,
      toDate: this.sharedService.toDate,
    } as EnterpriseFilters);
  }

  get oaeColor(): any {
    return this._oaeColor;
  }
  set oaeColor(value: number) {
    this._oaeColor = {
      'background-color':
        value < 75
          ? 'red'
          : value >= 75 && value < 85
          ? 'orange'
          : value > 85
          ? 'green'
          : 'red',
    } as any;
  }

  get availability(): any {
    return this._availability;
  }

  set availability(availability: number) {
    this._availability = {
      'background-color':
        availability < 75
          ? 'red'
          : availability >= 75 && availability < 85
          ? 'orange'
          : availability >= 85
          ? 'green'
          : 'red',
    } as any;
  }

  get isForward() {
    return this._isForward;
  }
  set isForward(isForward: boolean) {
    this._isForward = isForward;
  }
  get currentSelectedNodeType() {
    return this._currentSelectedNodeType;
  }
  set currentSelectedNodeType(node: string) {
    this._currentSelectedNodeType = node;
  }
}
