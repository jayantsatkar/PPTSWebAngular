import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LookupService {
  constructor() {}
  private data = [
    { key: 'CAS', value: 'Clean Air Suppliers', type: 'division' },
    { key: 'DRS', value: 'DRiV Suppliers', type: 'division' },
    { key: 'PS', value: 'Performance Solution Suppliers', type: 'division' },
    { key: 'PT', value: 'Powertrain Suppliers', type: 'division' },
    { key: 'Rybnik', value: 'Rybnik', type: 'plant' },
    { key: 'Edenkoben', value: 'Edenkoben', type: 'plant' },
    { key: 'Puebla', value: 'Puebla ll', type: 'plant' },
    { key: 'FF1', value: 'All', type: 'area' },
    { key: 'FF3', value: 'FF3_Pipe Production', type: 'area' },
    { key: 'FF4', value: 'FF4_Final Assembly', type: 'area' },
    { key: 'E4437', value: 'Focus Factory-7', type: 'line' },
    { key: 'Eagle1', value: 'Eagle 1', type: 'line' },
    { key: 'Eagle2', value: 'Eagle 2', type: 'line' },
    { key: 'Goliat7', value: 'Goliat 7', type: 'line' },
    { key: 'E4437', value: '0825 Bodymaker Goliat 5', type: 'machine' },
    { key: 'Eagle1', value: '04169 Maszyna perforująca', type: 'machine' },
    { key: 'Eagle2', value: '0823 BODYMARKER', type: 'machine' },
    { key: 'Goliat7', value: '15122 FLANGER', type: 'machine' },
    { key: 'shift1', value: 'All', type: 'shift' },
    { key: 'shift2', value: 'Shift 2', type: 'shift' },
    { key: 'shift3', value: 'Shift 3', type: 'shift' },
  ];

  private state = [
    {
      key: 'kol',
      value: 'kolkata',
      type: 'area',
      city: [
        {
          key: 'kolcity1',
          value: 'kolkata City1',
          perentType: 'kol',
        },
        {
          key: 'kolcity2',
          value: 'kolkata City2',
          perentType: 'kol',
        },
        {
          key: 'kolcity3',
          value: 'kolkata City3',
          perentType: 'kol',
        },
      ],
    },
    {
      key: 'mum',
      value: 'mumbai',
      type: 'area',
      city: [
        {
          key: 'mumcity1',
          value: 'mumbai City1',
          perentType: 'mum',
        },
        {
          key: 'mumcity2',
          value: 'mumbai City2',
          perentType: 'mum',
        },
        {
          key: 'mumcity3',
          value: 'kolkata City3',
          perentType: 'mum',
        },
      ],
    },
    { key: 'ranchi', value: 'ranchi', type: 'area', data: [] },
    { key: 'delhi', value: 'delhi', type: 'area', data: [] },
  ];

  getLookupData(lookupType?: string[]): Observable<any[]> {
    const result: any[] = [];
    lookupType?.forEach((type) => {
      this.data.filter((_d) => {
        if (_d.type === type) result.push(_d);
      });
    });
    return of(result);
  }
}
