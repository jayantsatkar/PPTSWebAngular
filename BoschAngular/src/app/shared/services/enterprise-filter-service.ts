import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import moment from 'moment';
import { PlantService } from './plant.service';
import appConfig from '../../../assets/appConfig.json';

interface EnterpriseFilters {
  plant: string;
  focusFactory: string | null;
  zone: string | null;
  line: string | null;
  fromDate: string;
  toDate: string;
  enterprise: string | null;
  division: string | null;
  shift: string | null;
  asset: string | null;
  currentNodeType: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class EnterpriseFilterService {
  private fromDateSource = new BehaviorSubject<string>(
    moment().subtract(1, 'days').format('YYYY-MM-DD')
  );
  private toDateSource = new BehaviorSubject<string>(
    moment().subtract(1, 'days').format('YYYY-MM-DD')
  );

  fromDate$ = this.fromDateSource.asObservable();
  toDate$ = this.toDateSource.asObservable();

  plantIdEdenkoben = appConfig.plantIdEdenkoben.toString();

  private enterpriseFiltersSource = new BehaviorSubject<EnterpriseFilters>(
    this.createEnterpriseFilters(
      this.fromDateSource.value,
      this.toDateSource.value
    )
  );

  enterpriseFilters$ = this.enterpriseFiltersSource.asObservable();

  constructor(private plantService: PlantService) {}

  // Add this method
  updatePlant(plantId: string): void {
    const currentFilters = this.enterpriseFiltersSource.value;
    const updatedFilters = {
      ...currentFilters,
      plant: plantId,
    };
    this.enterpriseFiltersSource.next(updatedFilters);
  }

  private createEnterpriseFilters(
    fromDate: string,
    toDate: string
  ): EnterpriseFilters {
    return {
      plant: this.plantIdEdenkoben,
      focusFactory: null,
      zone: null,
      line: null,
      fromDate: fromDate,
      toDate: toDate,
      enterprise: null,
      division: null,
      shift: null,
      asset: null,
      currentNodeType: null,
    };
  }

  setDates(fromDate: string, toDate: string): void {
    this.fromDateSource.next(fromDate);
    this.toDateSource.next(toDate);
    this.enterpriseFiltersSource.next(
      this.createEnterpriseFilters(fromDate, toDate)
    );
  }

  getEnterpriseFilters(): EnterpriseFilters {
    return this.enterpriseFiltersSource.value;
  }
}
