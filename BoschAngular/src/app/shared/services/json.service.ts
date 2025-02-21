// src/app/services/config.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  private configData: any;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return this.http.get('/assets/appConfig.json')
      .toPromise()
      .then((data) => {
        this.configData = data;
      })
      .catch((error) => {
        console.error('Could not load config.json:', error);
      });
  }

  getConfig() {
    return this.configData;
  }
}
