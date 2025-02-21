import { Component, Input, OnInit } from '@angular/core';
//import { MatrixValue } from 'src/app/modules/model/matrix.model';

import {MatrixValue} from '../../../modules/model/matrix.model'

@Component({
  selector: 'plant-matrix-value',
  templateUrl: './plant-matrix.component.html',
  styleUrls: ['./plant-matrix.component.scss'],
})
export class PlantMatrixComponent implements OnInit {
  @Input() matrixItems: MatrixValue[] = [];
  constructor() {}
  //allValue: string[] = [];
  //fontSize: string;

  ngOnInit(): void {}

  getColorForValue(value?: string | number): string {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;

    if (
      numericValue === undefined ||
      numericValue === null ||
      isNaN(numericValue)
    ) {
      return 'gray'; // Or any default color you prefer for invalid values
    }
    if (numericValue < 75) {
      return 'red';
    } else if (numericValue >= 75 && numericValue < 85) {
      return 'orange';
    } else if (numericValue >= 85) {
      return 'green';
    } else {
      return 'red'; // Default case, though it's not needed here
    }
  }

  // getFontSize(values: any) {
  //   // if (!Array.isArray(this.allValue)) {
  //   //   this.allValue = []; // Initialize if not an array
  //   // }
  //   this.allValue.push(values);
  //   if (this.allValue.length === 6) {
  //     const filteredValues = this.allValue.filter((x) => Number(x) > 100);
  //     if (filteredValues.length > 0) {
  //       this.fontSize = '1rem';
  //     } else {
  //       this.fontSize = '2rem';
  //     }
  //   }
  //   return this.fontSize;
  // }
}
