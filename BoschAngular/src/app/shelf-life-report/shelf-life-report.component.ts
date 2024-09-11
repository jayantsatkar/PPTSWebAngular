import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ConfigService } from '../Services/config.service';
import { Global } from '../Services/global';
import { toastrMsgService } from '../Services/toaster-msg.service';

interface Part {
  id: number;
  partNumber: string;
  description: string
}

@Component({
  selector: 'app-shelf-life-report',
  templateUrl: './shelf-life-report.component.html',
  styleUrl: './shelf-life-report.component.css'
})
export class ShelfLifeReportComponent implements OnInit {
  parts: any[] | undefined;

  selectedPart: any | undefined;

  constructor(private authService: AuthService, private configService: ConfigService, private toastr: toastrMsgService) {

  }
  ngOnInit() {
    this.getPartNumber();
    // this.cities = [
    //     { name: 'New York', code: 'NY' },
    //     { name: 'Rome', code: 'RM' },
    //     { name: 'London', code: 'LDN' },
    //     { name: 'Istanbul', code: 'IST' },
    //     { name: 'Paris', code: 'PRS' }
    // ];
  }


  getPartNumber() {
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
//alert(event);
console.log(this.selectedPart);
//.log(event);

  }
}
// export class Recipe {

//   public name : string;
//   public description : string;
//   public imagePath : string;
// }
