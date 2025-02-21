import { Component, OnInit } from '@angular/core';
import { NavbarToggleService } from '../../shared/services/navbar-toggle.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  sideBarOpen = false;
  constructor(private navbarToggleService: NavbarToggleService) {}
  ngOnInit(): void {
    this._onSubscribe();
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
    this.navbarToggleService.isSidebarToggle(this.sideBarOpen);
  }
  private _onSubscribe() {
    this.navbarToggleService.toggleSideNav.subscribe((value) => {
      this.sideBarOpen = value;
    });
  }
  // closeSidebar() {
  //   this.sideBarOpen = !this.sideBarOpen;
  //   this.navbarToggleService.isSidebarToggle(this.sideBarOpen);
  // }
}
