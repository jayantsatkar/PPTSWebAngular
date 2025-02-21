import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { EnterpriseFilters } from 'src/app/modules/model/enterprise-filters.model';

import { EnterpriseFilters } from '../../modules/model/enterprise-filters.model';

import { DEFAULT_FILTER_VALUE, MATRIX_STATIC_PROPS } from '../const/app.const';
//import { MatrixModel, MatrixValue } from 'src/app/modules/model/matrix.model';
import { MatrixModel, MatrixValue } from '../../modules/model/matrix.model';


@Injectable({
  providedIn: 'root',
})
export class ModularEventService {
  onRybnikPlantEvent$ = new BehaviorSubject<{
    enterpriseFilters: EnterpriseFilters;
    isRedirect: boolean;
  }>({ enterpriseFilters: {} as EnterpriseFilters, isRedirect: false });

  private _focusFactoryId: string | null = null;
  private _zone: string | null = null;
  private _line: string | null = null;
  private _asset: string | null = null;
  private _currentNodeType: string | null = null;
  private _isForward: boolean = false;
  private _isRedirect: boolean = false;

  onRybnikEvent(enterpriseFilters: EnterpriseFilters, isRedirect: boolean) {
    this.onRybnikPlantEvent$.next({ enterpriseFilters, isRedirect });
  }

  modularEnterprisesFilters({
    focusFactory = null,
    zone = null,
    line = null,
    asset = null,
    currentNodeType = null,
    isForward = false,
  }) {
    return {
      enterprise: DEFAULT_FILTER_VALUE.ENTERPRISE,
      division: DEFAULT_FILTER_VALUE.DIVISION,
      plant: DEFAULT_FILTER_VALUE.PLANT,
      focusFactory: focusFactory || this.focusFactoryId,
      zone: zone || this.zone,
      line: line || this.line,
      asset: asset || this.asset,
      fromDate: DEFAULT_FILTER_VALUE.FROMDATE,
      toDate: DEFAULT_FILTER_VALUE.TODATE,
      isForward: this.isForward ? isForward : true,
      currentNodeType: currentNodeType || this.currentNodeType,
    } as EnterpriseFilters;
  }

  mapPlantMetrixResponse(focusFactoryCollections: any[]): MatrixModel[] {
    const mappedMetrix: MatrixModel[] = [];
    focusFactoryCollections.map((item) => {
      const obj = {
        id: item.id,
        name: item.name,
        head: item.head,
        uniqueName: item.uniqueName,
        items: MATRIX_STATIC_PROPS.focusFactory.map((_factory: MatrixValue) => {
          const value: { [key: string]: any } = {
            OAE: item.oae,
            OEE: item.oee,
            TEEP: item.teep,
            Performance: item.performance,
            Quality: item.quality,
          };
          return {
            title: _factory.title,
            value: value[_factory.title as any] || item.availability,
            headerStyle: _factory.headerStyle,
            valueStyle: _factory.valueStyle,
          };
        }),
      } as MatrixModel;
      mappedMetrix.push(obj);
    });
    return mappedMetrix;
  }

  get focusFactoryId(): string | null {
    return this._focusFactoryId;
  }
  set focusFactoryId(value: string | null) {
    this._focusFactoryId = value;
  }

  get zone(): string | null {
    return this._zone;
  }
  set zone(value: string | null) {
    this._zone = value;
  }

  get line(): string | null {
    return this._line;
  }
  set line(value: string | null) {
    this._line = value;
  }

  get asset(): string | null {
    return this._asset;
  }
  set asset(value: string | null) {
    this._asset = value;
  }

  get currentNodeType(): string | null {
    return this._currentNodeType;
  }
  set currentNodeType(value: string | null) {
    this._currentNodeType = value;
  }

  get isForward() {
    return this._isForward;
  }

  set isForward(value: boolean) {
    this._isForward = value;
  }
  get isRedirect() {
    return this._isRedirect;
  }

  set isRedirect(value: boolean) {
    this._isRedirect = value;
  }
}
