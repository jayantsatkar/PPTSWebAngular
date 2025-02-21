import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonService } from './json.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  // private baseUrl = Global.URL;
  constructor(private http: HttpClient, private jsonService : JsonService, private router: Router) {}

  // HTTP POST REQUEST
  postRequest(url: string, body: any) {
    return this.http.post(`${this.jsonService.getConfig().commonUrl}${url}`, body);
  }

  // HTTP GET REQUEST
  getRequest(url: string) {
    return this.http.get(`${this.jsonService.getConfig().commonUrl}${url}`);
  }

  // HTTP DELETE REQUEST
  deleteRequest(url: string) {
    return this.http.delete(`${this.jsonService.getConfig().commonUrl}${url}`);
  }

  deleteById(url: string, payload: { deletedBy: any; id: any; }) {
    return this.http.delete(`${this.jsonService.getConfig().commonUrl}${url}`);
  }

  // HTTP PUT REQUEST
  putRequest(url: string, body: any) {
    return this.http.put(`${this.jsonService.getConfig().commonUrl}${url}`, body);
  }

  // POST FOR EXCEL
  postRequestBlob(url: string, payload: any): Observable<Blob> {
    return this.http.post(`${this.jsonService.getConfig().commonUrl}${url}`, payload, {
      responseType: 'blob'
    });
  }

  logOut() {
    sessionStorage.removeItem("token");
    this.router.navigate(["/user/login"]);
}
}
