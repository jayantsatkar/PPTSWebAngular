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
  partNumbers: any[] =[];

  selectedPart: any | undefined;
  refreshDataIntervalId: any;
  cols!: Column[];
  
  dateKeys : any;
  constructor(private authService: AuthService, private configService: ConfigService, private toastr: toastrMsgService) {
  }
  ngOnInit() {
    this.getPartNumbers();
    this.refreshDataIntervalId = setInterval(() => {
      this.onChange(null);
    }, 60000);
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
    //console.log('Called interval');
    let part = {
      partNumber: this.selectedPart?.partNumber
    }
    if (this.selectedPart != null) {
      this.authService.postData(Global["shelfReportUrl"], part).subscribe({
        next: (res: any) => {
          this.partCount = JSON.parse(res).Table;
          this.partNumbers = JSON.parse(res).Table1;

          console.log('this.partCount', this.partCount);
          console.log('this.partNumbers', this.partNumbers);

          this.cols = [];
          this.dateKeys =[];
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
      }),
        (error: { error: { Message: string; }; }) => {
          this.toastr.showErrorMsg('An error has occurred while processing this request. Please contact your administrator.<br>' + error.error.Message);
        };
    }
  }

  getCommaSeparatedDataForDate(dateKey: string): string {
    return this.partNumbers
      .map(entry => entry[dateKey])
      .filter(value => value !== null && value !== undefined)
      .join(", ");
  }
}