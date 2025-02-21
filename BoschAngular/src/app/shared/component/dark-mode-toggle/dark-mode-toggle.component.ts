
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
})
export class DarkModeToggleComponent implements OnInit {
  @Output() darkModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  //darkMode$ = this.darkModeService?.darkMode$;
  darkMode$ : any; 
  private _darkMode: boolean = true;
  isDarkMode = true;

  constructor(private darkModeService: DarkModeService) {
     //darkMode$ = this.darkModeService.darkMode$;
    // this.darkMode$ = this.darkModeChange.d
    this.darkModeService.darkMode$.subscribe(mode => {
      this.isDarkMode = mode;
      this.darkModeChange.emit(this.isDarkMode);
    });
  }

  ngOnInit(): void {
 // Ensure the service reflects the initial light mode state
 if (this._darkMode) {
  this.darkModeService.enable();
} else {
  this.darkModeService.disable();
}  }

  onToggle(): void {
    this._darkMode = !this._darkMode;
    this.darkModeChange.emit(this._darkMode);
    this.darkModeService.toggle();
  }
}
