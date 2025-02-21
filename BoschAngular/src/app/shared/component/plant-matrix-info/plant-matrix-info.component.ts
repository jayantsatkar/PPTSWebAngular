import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { MatrixModel } from 'src/app/modules/model/matrix.model';

import {MatrixModel} from '../../../modules/model/matrix.model'

@Component({
  selector: 'plant-matrix-info',
  templateUrl: './plant-matrix-info.component.html',
  styleUrls: ['./plant-matrix-info.component.scss'],
})
export class PlantMatrixInfoComponent implements OnInit {
  @Input() matrixData!: MatrixModel;
  @Input() buttonLabel!: string;
  @Output() onMatrixButtonClick = new EventEmitter<MatrixModel>();
  constructor() {}

  ngOnInit(): void {}

  onMatrixInfoButtonClick(data: MatrixModel) {
    this.onMatrixButtonClick.emit(data);
  }

  dashboardAllValuesZero(matrixData: any): boolean {
    // Return true if all values in the items array are 0, false otherwise
    return matrixData.items.every((item: { value: number; }) => item.value === 0);
  }
}
