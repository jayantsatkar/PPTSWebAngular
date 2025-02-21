import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
//import { LanguageService } from 'src/app/shared/services/language.service';
import { LanguageService } from '../../../../../src/app/shared/services/language.service';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { JsonService } from '../../../../../src/app/shared/services/json.service';
import { MsalService } from '@azure/msal-angular';
import moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  template: `
    <button (click)="callChildFunction()">Call Child Function</button>
  `,
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  dateTime = new Date() ;
  lastName: string | null = '';
  userName: string | null = '';

  constructor(
    private router: Router,
    private translate: TranslateService,
    private languageService: LanguageService,
    private jsonService: JsonService,
    private authServiceMsal: MsalService,
    private cdr: ChangeDetectorRef
  ) {
    this.translate.setDefaultLang('en');
  }
  isDarkMode: boolean = false;
  selectedText: string = 'EN';

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userFirstName');
    this.lastName = sessionStorage.getItem('userLastName');
    this.dateTime = moment().toDate();

    setInterval(() => {
      this.dateTime = moment().toDate(); // Convert Moment to Date
      this.cdr.detectChanges(); // Trigger change detection
    }, 1000);
  }

  onDarkModeChange(darkMode: boolean) {
    this.isDarkMode = darkMode;
    // check here
  }

  useLanguage(language: string) {
    this.languageService.onLanguacheChange(language);
  }

  onSelectionChange(event: any) {
    this.languageService.onLanguacheChange(event);
    this.selectedText = event;
  }

  handleFunctionCall() {
    console.log('Function called from child component');
  }

  toggleSidebar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  Navigation() {
    const url = this.jsonService.getConfig().tennecoOaeUrl;
    const newTab = window.open(url, '_blank');
    newTab?.focus();
  }

  logOut() {
    var loginProcess = sessionStorage.getItem('loginProcess');
    sessionStorage.clear();
    if (loginProcess == 'SSO') {
      console.log('SSO logout');
      this.authServiceMsal.logoutRedirect();
    } else {
      this.router.navigateByUrl('user/login');
    }
  }

  logOut_old() {
    this.LOGOUT2();
    setTimeout(() => {
      this.router.navigateByUrl('user/login');
    }, 100);
    this.LOGOUT2();
  }
  private isLogoutMessageShown = false;

  LOGOUT2() {
    sessionStorage.clear(); // Clear all session data
    if (!this.isLogoutMessageShown) {
      this.isLogoutMessageShown = true;
    }
    this.router.navigate(['user/login']);
  }
}
