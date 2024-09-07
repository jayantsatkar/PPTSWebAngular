import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
@Injectable({
    providedIn: 'root'
})
export class toastrMsgService {
    constructor(private toastr: ToastrService) {

    }

    showSuccessMsg(titleMsg: any) {
        this.toastr.success('', `${titleMsg}`,
            {
                progressBar: true,
                progressAnimation: 'increasing',
                timeOut: 3000
            }
        )
    }

    showErrorMsg(titleMsg: any) {
        this.toastr.error('', `${titleMsg}`,
            {
                progressBar: true,
                progressAnimation: 'increasing',
                timeOut: 3000
            }
        )
    }

    showWarningMsg(titleMsg: any) {
        this.toastr.info('', `${titleMsg}`,
            {
                progressBar: true,
                progressAnimation: 'increasing',
                timeOut: 3000
            }
        )
    }
}