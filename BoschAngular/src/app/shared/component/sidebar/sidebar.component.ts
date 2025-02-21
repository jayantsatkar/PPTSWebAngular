import { Component, Input, OnInit } from '@angular/core';
import { LookupService } from '../../services/lookup.service';
//import { Plant } from 'src/app/modules/model/dashboard-info.model';
import {Plant} from '../../../modules/model/dashboard-info.model';

import { ConfigService } from '../../../../../src/app/shared/services/config.service';
import { Global } from '../../../../../src/app/shared/services/global';
import { DataShareService } from '../../services/data.share.service';
//import { map } from 'highcharts';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() items: string[] = [];

  isPlantVisibility: boolean = false;
  isFFVisibility: boolean = false;
  isZoneVisibility: boolean = false;
  isLineVisibility: boolean = false;
  isShiftVisibility: boolean = false;

  visibleSidebar: boolean = false;
  isActive: boolean = false;
  division!: Plant[];
  zone!: Plant[];
  asset!: Plant[];
  plant!: Plant[];
  focusFactory!: Plant[];
  line!: Plant[];
  shift!: Plant[];
  machine!: Plant[];
  FromDate: string;
  ToDate: string;
  collections: any[] = [];
  filtersMap: Map<string, string> = new Map<string, string>();
  constructor(
    //private lookupService: LookupService,
    private configService: ConfigService,
    private dataShareService: DataShareService
  ) {
    const currentDate = new Date();
    this.FromDate = currentDate.toISOString().split('T')[0];
    this.ToDate = currentDate.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.masterDropdown(this.items);
  }
  toggleSidebar() {
    this.isActive = !this.isActive;
  }

  masterDropdown(items: string[]) {
    // Create an object to store filtered results dynamically
    const filteredResults: { [key: string]: any[] } = {};

    this.configService.getRequest(Global['MASTERDATA']).subscribe({
      next: (res: any) => {
        // Loop through the items array and filter the response data
        items.forEach((item) => {
          filteredResults[item.toLowerCase()] = res.filter(
            (data: { type: string }) =>
              data.type.toLowerCase() === item.toLowerCase()
          );
        });

        // Now you can access the filtered results using the filteredResults object
        this.division = filteredResults['division'] || [];
        this.plant = filteredResults['plant'] || [];
        this.focusFactory = filteredResults['focusfactory'] || [];
        this.zone = filteredResults['zone'] || [];
        this.line = filteredResults['line'] || [];
        this.asset = filteredResults['asset'] || [];
        this.machine = filteredResults['machine'] || [];
        this.shift = filteredResults['shift'] || [];

        // You can also log the filtered results to see the data
        console.log(filteredResults);
        this.shift.sort((a, b) => {
          const numA = parseInt(a.key.split(' ')[1], 10);
          const numB = parseInt(b.key.split(' ')[1], 10);
          return numA - numB;
        });
      },

      error: (err) => {
        if (err.status == 404) {
          console.log('Something went wrong!');
        }
        console.log(err.error.message);
      },
    });
  }

  onSelect(event: any, key: string): void {
    const value = event?.target?.value; // Null check using optional chaining
    if (value !== null && value !== undefined) {
      this._setVisibilityOfFilterDropdown(key);
      this.filtersMap.set(key, value);
    }
  }

  onViewFilters() {
    /**TODO :Refactore the code if there is batter approch*/
   // Use set() directly which will update the value if the key already exists
   this.filtersMap.set('fromDate', this.FromDate);
   this.filtersMap.set('toDate', this.ToDate);
    // Set the filters map in the data sharing service
    this.dataShareService.onView(this.filtersMap);

    // Hide the sidebar
    this.visibleSidebar = false;
  }

  private _setVisibilityOfFilterDropdown(options: string) {
    switch (options) {
      case 'division':
        this.isPlantVisibility = true;
        break;
      case 'plant':
        this.isFFVisibility = true;
        break;
      case 'focusFactory':
        this.isZoneVisibility = true;
        break;
      case 'zone':
        this.isLineVisibility = true;
        break;
      default:
        /**key === 'line' */
        this.isShiftVisibility = true;
        break;
    }
  }

  get isDivisionCount() {
    return this.division?.length > 0;
  }
  get isPlantCount() {
    return this.plant?.length > 0;
  }
  get isFocusFactoryCount() {
    return this.focusFactory?.length > 0;
  }
  get isZoneCount() {
    return this.zone?.length > 0;
  }
  get isLineCount() {
    return this.line?.length > 0;
  }
  get isAssetCount() {
    return this.asset?.length > 0;
  }
  get isMachineCount() {
    return this.machine?.length > 0;
  }
  get isShiftCount() {
    return this.shift?.length > 0;
  }

  get isUpdatedFromDate() {
    if (this.filtersMap.has('fromDate')) {
      return this.filtersMap.get('fromDate') === this.FromDate;
    } else {
      return false;
    }
  }

  get isUpdatedToDate() {
    if (this.filtersMap.has('toDate')) {
      return this.filtersMap.get('toDate') === this.ToDate;
    } else {
      return false;
    }
  }
}
