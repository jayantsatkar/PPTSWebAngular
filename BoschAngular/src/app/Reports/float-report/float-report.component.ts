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
  boms: any[] = [];
  totalRecords: any = 0;
  rowsPerPageOptions : any =10 ;
  csPartNumber: string = '';
  pcsPartNumber: string = '';
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
    // this.authService.postData(this.jsonConfigService.appConfig.commonUrl + '/BOM/GetBomPage', requestParams).subscribe((data) => {
    //   var bomData = JSON.parse(data);
    //   if (bomData.data[0].recordsTotal > 0) {
    //     this.totalRecords = bomData.data[0].recordsTotal;
    //     this.boms = bomData.data;
    //   }
    //   else {
    //     this.boms = [];
    //     this.totalRecords = 0;
    //   }
    //   this.isloading = false;
    // },
    //   (error) => {
    //     this.isloading = false;
    //     let selectedLanguage = localStorage.getItem('selectedLanguage') ? localStorage.getItem('selectedLanguage')?.toString() : '';
    //     if (selectedLanguage == 'ch') {
    //       this.appService.alertMessageBoxPopUp('错误', 'alert', '处理此请求时发生错误。请联系您的管理员。<br>' + error.error.Message);
    //     }
    //     else {
    //       this.appService.alertMessageBoxPopUp('Error', 'alert', 'An error has occurred while processing this request. Please contact your administrator.<br>' + error.error.Message);
    //     }

    //   });
  }

  exportexcel(): void {
   
    // let increment = 1;
    // const resultarray = this.boms.map(bom => ({
    //   "S.No":increment++,
    //   "Part Number": bom.BomName,
    //   "Revision": bom.ProductRevision, "Factory": bom.Factory, "Description": bom.Description
     
    // }));
    // const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(resultarray);
    // const workbook: XLSX.WorkBook = { Sheets: { 'BOMDetails': worksheet }, SheetNames: ['BOMDetails'] };
    // XLSX.writeFile(workbook, this.toExportFilexlxName(this.file, formatDate(new Date(), 'yyyy-MM-dd_HH-mm-ss.SSSS', 'en-US')))
    
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.getBomsPagination();
  }
  searchTable(event: any) {
    this.searchKey = event.target.value;
    this.first = 0;
    setTimeout(() => {
      if (this.pSearchKey != event.target.value) {
        this.pSearchKey = event.target.value;
        this.getBomsPagination();
      }
    }, 2000);

  }

  clear(table: any) {
    table.clear();
    this.searchKey = '';
    // this.csDescription = '';
    // this.csFactory = '';
    // this.csPartNumber = '';
    // this.csRevision = '';
    this.getBomsPagination();
  }
  onRowsChange(event: any) {
    this.rows = event.value;
    this.first = 0;
    this.getBomsPagination();
  }

  onPartNumberChange(event: any) {
    this.first = 0;
    this.csPartNumber = event.target.value;
    setTimeout(() => {
      if (this.pcsPartNumber != event.target.value) {
        this.pcsPartNumber = event.target.value;
        this.getBomsPagination();
      }
    }, 2000);
  }
}
