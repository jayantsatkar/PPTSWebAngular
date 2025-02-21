import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrMsgService } from './toastr.service';
import { EncryptionService } from './encryption.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private toastrMsgService: ToastrMsgService,
    private encrpService: EncryptionService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = sessionStorage.getItem('token');
    let token: any;

    if (authToken) {
      const parsedToken = JSON.parse(authToken);
      token = parsedToken['token'];
    }
    let req: HttpRequest<unknown> = request;
    if (token) {
      // Clone the request and set the Authorization header
      req = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

   
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // You can handle the error here or rethrow it
        if (error.status == 0) {
          // this.toastrMsgService.showError("Something went wrong!");
        } else if (error.status == 401) {
          this.toastrMsgService.showError(error.error.message);
          this.encrpService.logOut();
        } else if (error.status == 302) {
          this.toastrMsgService.showError(error.error.message);
        } else if (error.status == 400) {
          this.toastrMsgService.showError(error.error.message);
        } else {
          // this.toastrMsgService.showErrorMsg("Something went wrong!");
        }
        return throwError(() => error);
      })
    );
  }
}
