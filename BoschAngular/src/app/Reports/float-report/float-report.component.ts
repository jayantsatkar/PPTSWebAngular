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
  products!: any[];
  ngOnInit(): void {
    this.products  = [{
      'code': '1',
      'name' :'123',
      'category':'123',
      'quantity' :'123'
    },
    {
      'code': '2',
      'name' :'123',
      'category':'123',
      'quantity' :'123'
    },
    {
      'code': '3',
      'name' :'123',
      'category':'123',
      'quantity' :'123'
    },
    {
      'code': '4',
      'name' :'123',
      'category':'123',
      'quantity' :'123'
    },
    {
      'code': '5',
      'name' :'123',
      'category':'123',
      'quantity' :'123'
    },
    {
      'code': '6',
      'name' :'123',
      'category':'123',
      'quantity' :'123'
    },
    {
      'code': '7',
      'name' :'123',
      'category':'123',
      'quantity' :'123'
    },
    {
      'code': '8',
      'name' :'123',
      'category':'123',
      'quantity' :'123'
    }
  ]
  //  this.getBomsPagination();
  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

pageChange(event: { first: any; rows: any; }) {
    this.first = event.first;
    this.rows = event.rows;
}

isLastPage(): boolean {
    return this.products ? this.first === this.products.length - this.rows : true;
}

isFirstPage(): boolean {
    return this.products ? this.first === 0 : true;
}
  
}
