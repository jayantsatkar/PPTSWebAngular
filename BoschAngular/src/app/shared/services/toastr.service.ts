import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastrMsgService {
  constructor(private toastr: ToastrService) {}

  // will call the this method when api return http 200
  showSuccess(textMsg: any) {
    this.toastr.success('', `${textMsg}😊`, {
      progressBar: true,
      progressAnimation: 'increasing',
    });
  }

  // will call the this method when we get error
  showError(textMsg: any) {
    this.toastr.error('', `${textMsg}😔`, {
      progressBar: true,
      progressAnimation: 'increasing',
    });
  }

  showWarning(textMsg:string){
    this.toastr.info('', `${textMsg}😊`, {
      progressBar: true,
      progressAnimation: 'increasing',
    });
  }
}
