import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MapConversionService<T> {
  mapToObject(map: Map<string, T>): { [key: string]: T } {
    let obj: { [key: string]: T } = {};
    map.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }
}
