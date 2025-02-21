import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarToggleService {
  toggleSideNav = new EventEmitter();
  public toggleSidebarSub = new Subject<string>();

  constructor() {}

  isSidebarToggle(data: any) {
    this.toggleSidebarSub.next(data);
  }

  isToggled(value: boolean) {
    this.toggleSideNav.next(value);
  }
}
