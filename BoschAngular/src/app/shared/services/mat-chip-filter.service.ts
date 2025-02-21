import { Injectable } from '@angular/core';
import { Level } from '../const/level';
import {   FILTER_CONFIG_MAP_ADD_CHIP,  FormDataModelWithoutChipItems,  MAP_CONFIG_FOR_ON_OVER_CHIP_CLICK,  MAP_CONFIG_FOR_REMOVE_CHIP_BY_CLOSE,} from '../config/mat-chip-filter-const.config';
// import { FormDataModel } from 'src/app/modules/model/form-data.model';
import {FormDataModel} from '../../modules/model/form-data.model';
@Injectable({
  providedIn: 'root',
})
export class MatChipFilterService {
  constructor() { }

  private isValidChip(value: string): boolean {
    return value.length > 0;
  }

  addMatChips(title: string): Level[] {
    const newCrumb: Level = this._createMatChips(title);
    return [newCrumb];
  }

  filterMatChips(value: string, matChipCollection: Level[]): Level[] {
    const filterValue = value.toLowerCase();
    return matChipCollection.filter((crumb) =>
      crumb.title.toLowerCase().includes(filterValue)
    );
  }

  updateFormDataModel(
    formDataModel: FormDataModel,
    selectedCrumb: Level,
    isOnChipSelection: boolean = false,
    isChipRemoved: boolean = false
  ): void {
    if (!selectedCrumb?.target) return;
    const { target, id } = selectedCrumb;
    const config =
      !isOnChipSelection && !isChipRemoved
        ? FILTER_CONFIG_MAP_ADD_CHIP[target]
        : isChipRemoved
          ? MAP_CONFIG_FOR_REMOVE_CHIP_BY_CLOSE[target]
          : MAP_CONFIG_FOR_ON_OVER_CHIP_CLICK[target];
    if (!config) return;

    // if (!isChipRemoved) {
    //   const field = config.setField;
    //   (formDataModel as FormDataModelWithoutChipItems)[
    //     field as keyof FormDataModelWithoutChipItems
    //   ] = id;
    // }
    const field = config.setField;
    (formDataModel as FormDataModelWithoutChipItems)[
      field as keyof FormDataModelWithoutChipItems
    ] = id;

    formDataModel.curLevel = isChipRemoved
      ? formDataModel.curLevel
      : config.level;
    config.resetFields?.forEach((field) => {
      (formDataModel as FormDataModelWithoutChipItems)[
        field as keyof FormDataModelWithoutChipItems
      ] = 0;
    });
    // if (isOnChipSelection || isChipRemoved) {
    //   formDataModel.curLevel = isChipRemoved
    //     ? formDataModel.curLevel
    //     : config.level;
    //   config.resetFields?.forEach((field) => {
    //     (formDataModel as FormDataModelWithoutChipItems)[
    //       field as keyof FormDataModelWithoutChipItems
    //     ] = 0;
    //   });
    // }
  }

  private _createMatChips(title: string): Level {
    return {
      iid: Date.now(),
      id: 2,
      levelNo: 1,
      title: title,
    };
  }
}
