import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { MessageService } from "primeng/api";
@Injectable({
    providedIn: 'root'
})
export class toastrMsgService {
    constructor(private toastr: MessageService) {

    }

    showSuccessMsg(titleMsg: any) {
        this.toastr.add({ severity: 'success', summary: 'Success', detail: titleMsg });
    }

    showErrorMsg(titleMsg: any) {
        this.toastr.add({ severity: 'error', summary: 'Error', detail: titleMsg });
    }

    showWarningMsg(titleMsg: any) {
        this.toastr.add({ severity: 'info', summary: 'Info', detail: titleMsg });
    }
}