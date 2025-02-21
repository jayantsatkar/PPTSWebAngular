import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-generic-table',
  templateUrl: './report-generic-table.component.html',
  styleUrls: ['./report-generic-table.component.scss'],
})
export class ReportGenericTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() columns: Array<{
    field: string;
    placeholder: string;
    ariaLabel: string;
    type?: string;
    align?: string;
  }> = [];

  @Input() tableData: any[] = [];
  @Input() scrollHeight: string = '400px';
  @Input() tableStyle: any = {
    'min-width': '30rem',
    'font-size': '15px',
    color: 'black',
  };
}
