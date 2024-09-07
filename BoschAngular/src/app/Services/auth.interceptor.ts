import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { toastrMsgService } from "./toaster-msg.service";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor( private toasterMsgService : toastrMsgService,
      private authService : AuthService
        
    ){}
    intercept(request: HttpRequest<unknown>, 
        next: HttpHandler): Observable<HttpEvent<unknown>> {
      const authToken : any = sessionStorage.getItem("token");

      let token: any;

      if(authToken){
        let tokenPased = JSON.parse(authToken);
        token = tokenPased.token;
      }

      let req : HttpRequest<unknown>= request;
      if(token){
        req = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            }
        });
      }

      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) =>{
            if(error.status == 0){
                this.toasterMsgService.showErrorMsg("Something went wrong");
            }
            else if( error.status == 401){
               this.authService.logOut();
            }

            else {
                this.toasterMsgService.showErrorMsg(error.error.message);
            }

            return throwError(()=> error);
        })
      )
    }
}