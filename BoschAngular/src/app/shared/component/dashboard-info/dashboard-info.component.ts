import { Component, Input, OnInit } from '@angular/core';
import { DashboardInfo } from '../../../modules/model/dashboard-info.model';

@Component({
  selector: 'tenneco-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.scss']
})

export class DashboardInfoComponent implements OnInit {
  @Input() dashboardInfoData: DashboardInfo[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
