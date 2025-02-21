import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Global } from './global';
import { Level } from '../const/level';
import { BehaviorSubject } from 'rxjs';
import appConfig from '../../../assets/appConfig.json';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  plantDetails: any[] = [];
  loaded: boolean = false;
  private plantDetailsSubject = new BehaviorSubject<any[]>(this.plantDetails);

  constructor(private configService: ConfigService) {}

  fetchPlant() {
    if (this.loaded) return;
    const url = `${Global['GET_PLANT']}`;
    this.configService.getRequest(url).subscribe({
      next: (data: any) => {
        this.plantDetails = data;
        this.loaded = true;
        this.plantDetailsSubject.next(this.plantDetails);
      },
      error: (error) => {
        console.error('Error fetching production details', error);
      },
    });
  }

  getCrumbs(): Level[] {
    var crumb = this.plantDetails.map((plant) => ({
      iid: Date.now(),
      id: plant.id,
      levelNo: 0,
      title: plant.name,
      target: 'plant',
    }));
    return crumb;
  }

  getPlantDetailsSubject() {
    return this.plantDetailsSubject.asObservable();
  }
}
