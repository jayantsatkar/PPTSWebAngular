import { EventEmitter, Injectable } from '@angular/core';
import moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { EnterpriseFilters } from '../../modules/model/enterprise-filters.model';
//import { BreadcrumItem } from 'src/app/modules/model/enterprise-root-node.model';
import { BreadcrumItem } from '../../modules/model/enterprise-root-node.model'
import { PlantFiltersQuery } from '../../modules/model/plant-filters-query.model';
import appConfig from '../../../assets/appConfig.json';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  $onView = new EventEmitter();
  $onRequestedChanges = new EventEmitter();
  $onSlideMenuChanges = new EventEmitter();
  $onHoverSlideMenuStateChanges = new EventEmitter();

  private _fromDate: string = '';
  private _toDate: string = '';
  private _enterprisesFilter: EnterpriseFilters =
    {
      enterprise: '',
      division: '',
      plant: '',
      focusFactory: '',
      zone: '',
      line: '',
      shift: '',
      asset: '',
      fromDate: '',
      toDate: '',
      currentNodeType: '',
      pageNo: '1',
      pageSize: '10'
    };
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  plantIdEdenkoben = appConfig.plantIdEdenkoben.toString();
  private _plantFiltersQuery = {
    plant: this.plantIdEdenkoben,
    pageNo: '1',
    pageSize: '10',
    fromDate:
      this.fromDate || moment().subtract(0, 'days').format('YYYY-MM-DD'),
    toDate: this.toDate || moment().subtract(0, 'days').format('YYYY-MM-DD'),
  } as unknown as PlantFiltersQuery;

  private _onSubject = new BehaviorSubject<any>(null);

  constructor() {
    // this._enterprisesFilter = [{enterprise:'ja'}]
  }

  darkMode$ = this.darkModeSubject.asObservable();

  data$ = this._onSubject.asObservable();

  clearData() {
    this._plantFiltersQuery = {
      plant: this.plantIdEdenkoben,
      pageNo: '1',
      pageSize: '10',
      fromDate: moment().subtract(0, 'days').format('YYYY-MM-DD'),
      toDate: moment().subtract(0, 'days').format('YYYY-MM-DD'),
    } as unknown as PlantFiltersQuery;
  }

  toggle() {
    const currentMode = this.darkModeSubject.value;
    this.darkModeSubject.next(!currentMode);
  }

  setDarkMode(isDarkMode: boolean) {
    this.darkModeSubject.next(isDarkMode);
  }

  getData() {
    const currentMode = this.darkModeSubject.value;
    this.darkModeSubject.next(!currentMode);
  }

  setData(data: any) {
    this._onSubject.next(data);
  }

  onView = (map: Map<string, string>) => this.$onView.next(map);

  onRequestedChanges = (filterQuery: EnterpriseFilters, breadcrumbData: any) =>
    this.$onRequestedChanges.next({ filterQuery, breadcrumbData });

  onSlideMenuChanges = (
    breadcrumb?: BreadcrumItem[],
    filterQuery?: EnterpriseFilters
  ) => this.$onSlideMenuChanges.next({ breadcrumb, filterQuery });

  onHoverSlideMenuStateChanges = (breadcrumb?: BreadcrumItem[]) =>
    this.$onHoverSlideMenuStateChanges.next(breadcrumb);

  get sharedData(): any {
    return this._onSubject.value;
  }

  set toDate(value: string) {
    this._toDate = value;
  }
  get toDate() {
    return this._toDate;
  }

  set fromDate(value: string) {
    this._fromDate = value;
  }

  get fromDate() {
    return this._fromDate;
  }

  set enterprisesFilter(value: EnterpriseFilters) {
    this._enterprisesFilter = value;
  }
  get enterprisesFilter() {
    return this._enterprisesFilter;
  }
  set plantFilter(value: PlantFiltersQuery) {
    this._plantFiltersQuery = value;
  }

  get plantFilter() {
    return this._plantFiltersQuery;
  }
}
