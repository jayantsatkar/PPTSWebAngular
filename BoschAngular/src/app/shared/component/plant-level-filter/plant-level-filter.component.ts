import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormDataModel } from 'src/app/modules/model/form-data.model';
import { PlantFiltersQuery } from 'src/app/modules/model/plant-filters-query.model';
import { DataShareService } from '../../services/data.share.service';
import { JsonService } from '../../services/json.service';
import { Subscription } from 'rxjs';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-plant-level-filter',
  templateUrl: './plant-level-filter.component.html',
  styleUrls: ['./plant-level-filter.component.scss'],
})
export class PlantLevelFilterComponent implements OnInit, OnDestroy {
  @Input() childContent: TemplateRef<HTMLElement>;
  @Input() additionalContent: TemplateRef<HTMLElement>;
  @Input() isDateRangeFilterRequired: boolean;
  @Input() componetFrom: string;
  @Input() maxDate: Date | null = null;
  @Input() isPlantHierarchyRequired: boolean = true;
  
  curLevel = 0;
  plantID: any;
  filtersQuery = {
    plant: '',
    pageNo: '1',
    pageSize: '10',
  } as PlantFiltersQuery;

  @Output() searchSparePartConsumption = new EventEmitter<PlantFiltersQuery>();
  private plantSubscription: Subscription;
  constructor(private sharedService: DataShareService, private plantService: PlantService,
    private jsonService: JsonService,
  ) {}

  ngOnInit(): void {
    this.plantSubscription = this.plantService.getPlantDetailsSubject().subscribe((plants) => {
      if (plants.length > 0) {
        this.plantID = plants[0].id.toString();
        this.filtersQuery.plant = this.plantID; 
        this.filtersQuery.pageNo = '1';
        this.filtersQuery.pageSize = '10';
        console.log(this.filtersQuery, "filter query from plant filter component");
      }
    });
  }

  private _payLoad(formDataModel?: FormDataModel): PlantFiltersQuery {
    const dataModel = {
      plant:
        formDataModel?.plantId != null
          ? formDataModel.plantId.toString()
          : this.plantID,
      focusFactory:
        formDataModel?.focusFactoryId != null &&
        formDataModel?.focusFactoryId != 0
          ? formDataModel.focusFactoryId.toString()
          : '' ,
      zone:
        formDataModel?.zoneId != null && formDataModel?.zoneId != 0
          ? formDataModel.zoneId.toString()
          : '',
      line:
        formDataModel?.lineId != null && formDataModel?.lineId != 0
          ? formDataModel.lineId.toString()
          : '',
      asset:
        formDataModel?.assetId != null && formDataModel?.assetId != 0
          ? formDataModel.assetId.toString()
          : '',
      pageNo: '1',
      pageSize: '10',
      fromDate: this.sharedService.fromDate,
      toDate: this.sharedService.toDate,
    };

    this.sharedService.plantFilter = dataModel;
    return {
      ...dataModel,
    } as PlantFiltersQuery;
  }

  onDateRangeFilter() {
    this.filtersQuery.fromDate = this.sharedService.fromDate;
    this.filtersQuery.toDate = this.sharedService.toDate;
    this.searchSparePartConsumption.emit(this.filtersQuery);
  }

  onChipSelectionChange(formDataModel: FormDataModel) {
    this.filtersQuery = this._payLoad(formDataModel);
    this.searchSparePartConsumption.emit(this.filtersQuery);
  }

  onChipRemoveEventChange(formDataModel: FormDataModel) {
    this.filtersQuery = this._payLoad(formDataModel);
    this.searchSparePartConsumption.emit(this.filtersQuery);
  }

  ngOnDestroy(): void {
    this.filtersQuery = {} as PlantFiltersQuery;
  }
}
