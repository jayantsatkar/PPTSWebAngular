import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ConfigService } from '../Services/config.service';
import { Global } from '../Services/global';
import { toastrMsgService } from '../Services/toaster-msg.service';
import { Part } from '../model/part';

// interface Part {
//   id: number;
//   partNumber: string;
//   description: string
// }

interface Column {
  field: string;
  header: string;
}

interface Product {
  id: number;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}


@Component({
  selector: 'app-shelf-life-report',
  templateUrl: './shelf-life-report.component.html',
  styleUrl: './shelf-life-report.component.css'
})
export class ShelfLifeReportComponent implements OnInit {
  parts!: Part[];
  partCount: any[] = [];
  partNumbers: any[] = [];
  totalCount: any;
  selectedPart: any | undefined;
  refreshDataIntervalId: any;
  cols!: Column[];
  refreshTime: number = 0;
  dateKeys: any;
  constructor(private authService: AuthService, private configService: ConfigService, private toastr: toastrMsgService) {
    this.refreshTime = this.configService.getConfig().refreshTime * 1000;
  }
  ngOnInit() {

    this.getPartNumbers();
    this.refreshDataIntervalId = setInterval(() => {
      this.onChange(null);
    }, this.refreshTime);
  }

  getPartNumbers() {
    this.authService.getData(Global["allPartUrl"]).subscribe({
      next: (res: any) => {
        this.parts = JSON.parse(res);
        // console.log(this.parts);
      }
    }),
      (error: { error: { Message: string; }; }) => {
        this.toastr.showErrorMsg('An error has occurred while processing this request. Please contact your administrator.<br>' + error.error.Message);
      };
  }
  onChange(event: any) {

    let part = {
      partNumber: this.selectedPart?.partNumber
    }
    if (this.selectedPart != null) {
      this.authService.postData(Global["shelfReportUrl"], part).subscribe({
        next: (res: any) => {

          const jsonObject = JSON.parse(res);

          let tableCount = Object.keys(jsonObject).length;

          console.log('Table Count=', tableCount);
          if (tableCount == 3) {
            this.partCount = JSON.parse(res).Table;
            this.partNumbers = JSON.parse(res).Table1;
            this.totalCount = JSON.parse(res).Table2[0].CNT;//JSON.parse(res).Table2;

            console.log('this.partCount', this.partCount);
            console.log('this.partNumbers', this.partNumbers);

            this.cols = [];
            this.dateKeys = [];
            this.dateKeys = Object.keys(this.partCount?.[0]);
            let keys = Object.keys(this.partCount?.[0]);
            for (let i = 0; i < keys.length; i++) {
              let object = {
                field: keys[i],
                header: keys[i]
              }
              this.cols.push(object)
            }
            console.log(keys);
            console.log(this.cols);
          }
          else {
            this.partCount.splice(0, this.partCount.length);

            this.partNumbers.splice(0, this.partNumbers.length);
            this.cols = [];
            //  this.partNumbers = []
            this.totalCount = 0;
            this.dateKeys = [];
            this.toastr.showWarningMsg("No data found for this part");
          }

        }
      }),
        (error: { error: { Message: string; }; }) => {
          this.toastr.showErrorMsg('An error has occurred while processing this request. Please contact your administrator.<br>' + error.error.Message);
        };
    }
  }

  getCommaSeparatedDataForDate(dateKey: string): string {
    if (dateKey.length > 0) {
      return this.partNumbers
        .map(entry => entry[dateKey])
        .filter(value => value !== null && value !== undefined)
        .join(", ");
    }
    return "";
  }
}