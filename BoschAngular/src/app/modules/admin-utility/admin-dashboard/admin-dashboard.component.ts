import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  
  constructor() { }

  ngOnInit(): void {
    this.initializeMenu()
  }

  private initializeMenu(): void {
    this.items = [{ label: 'Admin Dashboard' }];
    this.home = { label: 'Home', routerLink: '' };
  }

}
