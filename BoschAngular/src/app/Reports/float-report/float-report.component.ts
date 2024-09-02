import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-float-report',
  templateUrl: './float-report.component.html',
  styleUrl: './float-report.component.css'
})
export class FloatReportComponent implements OnInit {
isloading: boolean = true;
first: any = 0;
last: any = 10;
rows: any = 10;
searchKey: any;
pSearchKey: any;
ngOnInit(): void {
  this.getBomsPagination();
}

getBomsPagination() {
  this.isloading = true;
  var requestParams: any = {
    start: this.first,
    length: this.rows,
    search: { value: this.searchKey }
  
  }
  this.authService.postData(this.jsonConfigService.appConfig.commonUrl + '/BOM/GetBomPage', requestParams).subscribe((data) => {
    var bomData = JSON.parse(data);
    if (bomData.data[0].recordsTotal > 0) {
      this.totalRecords = bomData.data[0].recordsTotal;
      this.boms = bomData.data;
    }
    else {
      this.boms = [];
      this.totalRecords = 0;
    }
    this.isloading = false;
  },
    (error) => {
      this.isloading = false;
      let selectedLanguage =  localStorage.getItem('selectedLanguage')?localStorage.getItem('selectedLanguage')?.toString():'';
      if(selectedLanguage == 'ch'){
        this.appService.alertMessageBoxPopUp('错误', 'alert', '处理此请求时发生错误。请联系您的管理员。<br>' + error.error.Message);
      }
      else {
        this.appService.alertMessageBoxPopUp('Error', 'alert', 'An error has occurred while processing this request. Please contact your administrator.<br>' + error.error.Message);
      }
      
    });
}
}
