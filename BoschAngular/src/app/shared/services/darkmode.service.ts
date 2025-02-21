import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkModeSubject = new BehaviorSubject<boolean>(true); // Default to dark mode
  darkMode$ = this.darkModeSubject.asObservable();

  toggle() {
    this.darkModeSubject.next(!this.darkModeSubject.value);
  }

  enable() {
    this.darkModeSubject.next(true);
  }

  disable() {
    this.darkModeSubject.next(false);
  }
}
