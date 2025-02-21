import { Injectable } from '@angular/core';
// import { FormDataModel } from 'src/app/modules/model/form-data.model';
import { FormDataModel } from '../../modules/model/form-data.model'

import { ConfigService } from './config.service';
import { Observable, of } from 'rxjs';
import {
  ASSET,
  FOCUS_FACTORY,
  LINE,
  PLANT_FILTER_TYPE,
  PlantFilter,
  ZONE,
} from '../const/app.const';
import {
  apiEndpoints,
  PROPERTY_FIELD,
  PropertyField,
  TARGET_FIELD,
  TargetField,
} from '../config/mat-chip-filter-const.config';
import { Level } from '../const/level';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class FormDataApiService {
  private _currentSelectedChipTarget!: string;
  constructor(
    private configService: ConfigService,
    private utilService: UtilService
  ) {}

  getFormData(
    formDataModel: FormDataModel,
    currentSelectedChip?: Level
  ): Observable<any> {
    const apiName = this._handleFormDataUpdate(
      formDataModel,
      currentSelectedChip
    );
    if (!!apiName) {
      return this.configService.getRequest(apiName);
    } else {
      return of(null);
    }
  }

  private _handleFormDataUpdate(
    formDataModel: FormDataModel,
    selectedChip?: Level
  ): string | void {
    let idField, target;
    switch (formDataModel.curLevel) {
      case PlantFilter.plant:
        this._currentSelectedChipTarget = PLANT_FILTER_TYPE.PLANT;
        return apiEndpoints[PlantFilter.plant](formDataModel);

      case PlantFilter.focusFactory:
        this._currentSelectedChipTarget = PLANT_FILTER_TYPE.FOCUS_FACTORY;
        idField = PROPERTY_FIELD[FOCUS_FACTORY];
        target = TARGET_FIELD[FOCUS_FACTORY];
        this._updateChip({ formDataModel, selectedChip, idField, target });
        return apiEndpoints[PlantFilter.focusFactory](formDataModel);

      case PlantFilter.zone:
        this._currentSelectedChipTarget = PLANT_FILTER_TYPE.ZONE;
        idField = PROPERTY_FIELD[ZONE];
        target = TARGET_FIELD[ZONE];
        this._updateChip({ formDataModel, selectedChip, idField, target });
        return apiEndpoints[PlantFilter.zone](formDataModel);

      case PlantFilter.line:
        this._currentSelectedChipTarget = PLANT_FILTER_TYPE.LINE;
        idField = PROPERTY_FIELD[LINE];
        target = TARGET_FIELD[LINE];
        this._updateChip({ formDataModel, selectedChip, idField, target });
        return apiEndpoints[PlantFilter.line](formDataModel);
      case PlantFilter.asset:
        this._currentSelectedChipTarget = PLANT_FILTER_TYPE.ASSET;
        idField = PROPERTY_FIELD[ASSET];
        target = TARGET_FIELD[ASSET];
        this._updateChip({ formDataModel, selectedChip, idField, target });
        return '';
      default:
        this._currentSelectedChipTarget = 'nonext';

        return '';
    }
  }

  private _updateChip({
    formDataModel,
    selectedChip,
    idField,
    target,
  }: {
    formDataModel: FormDataModel;
    selectedChip?: Level;
    idField: PropertyField;
    target: TargetField;
  }): void {
    formDataModel[idField] = selectedChip?.id ?? formDataModel[idField];

    if (selectedChip) {
      const chip = {
        iid: selectedChip.iid,
        id: selectedChip.id,
        levelNo: selectedChip.levelNo,
        title: selectedChip.title,
        target: target,
      };
      formDataModel.chipItems = this.utilService.addUniqueItem(
        formDataModel.chipItems,
        chip,
        'target'
      );
    }
  }

  get currentSelectedChipTarget() {
    return this._currentSelectedChipTarget;
  }
}
