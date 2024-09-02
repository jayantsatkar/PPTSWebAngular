import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JsonConfigService } from '../Services/json-config.service';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public isLoading = new BehaviorSubject(false);
    moduleFilterData: any[] = [];
    selectedUserId: any = 0;
    userID: Number;
    isfromActive: boolean = false;
    myGlobalModule: any[] = [];
    myGlobalForm: any[] = [];

    checkDuplicateObject: any = {
        id: 0,
        filedName: '',
        fieldValue: ''
    };
    checkDupliateValue: any;
    constructor(private http: HttpClient, private jsonService: JsonConfigService,) {
        this.userID = Number(localStorage.getItem('userId')?.toString());
    }

    getData(requestUrl: string, headerReq?: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
            })
        };
        return this.http.get(requestUrl, headerReq ? headerReq : httpOptions);
    }


    postData(requestUrl: string, requestBody: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
            })
        };
        return this.http.post<any>(requestUrl, requestBody, httpOptions);
    }



    postFileData(requestUrl: string, requestBody: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                // 'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
            })
        };
        return this.http.post<any>(requestUrl, requestBody, httpOptions).pipe(catchError(this.handleError));
    }


    putData(requestUrl: string, requestBody: any, headerReq?: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
            })
        };
        return this.http.put<any>(requestUrl, requestBody, headerReq ? headerReq : httpOptions);
    }


    putFileData(requestUrl: string, requestBody: any, headerReq?: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                // 'Content-Type': 'application/json', 
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
            })
        };
        return this.http.put<any>(requestUrl, requestBody, headerReq ? headerReq : httpOptions);
    }

    deteleData(requestUrl: string, headerReq?: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
            })
        };
        return this.http.delete<any>(requestUrl, headerReq ? headerReq : httpOptions);
    }

    getFile(requestUrl: string, requestBody?: any, headerReq?: any): Observable<Blob> {
        return this.http.post(requestUrl, '', { responseType: 'blob' }).pipe(catchError(this.handleError));;
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
        }
        else {
        }
        return throwError(errorResponse.error);
    }

    getDataWithPost(requestUrl: string, model: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
            })
        };
        return this.http.post<any>(requestUrl, model, httpOptions);
    }


    // constructor(private http: HttpClient, private jsonService: JsonConfigService) {

    // }
    fetchData() {
        // this.myGlobalModule= 
        return this.http.get(`${this.jsonService.appConfig.commonUrl}/Module/GetModulesByUser/${Number(localStorage.getItem('userId')?.toString())}`);
    }
    fetchDataform() {
        return this.http.get(`${this.jsonService.appConfig.commonUrl}/Form/GetAssignFormToUser/${Number(localStorage.getItem('userId')?.toString())}`);
    }
}
