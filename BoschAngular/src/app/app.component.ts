import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'BoschAngular';
  items: MegaMenuItem[] | undefined;
  constructor(private router: Router, private translate: TranslateService) {
    const selectedLanguage = localStorage.getItem('selectedLanguage');

    // If the selected language is found in local storage, set it as the current language
    if (selectedLanguage) {
      this.translate.use(selectedLanguage);
      translate.setDefaultLang(selectedLanguage);
    }
    else {
      translate.setDefaultLang('en');
    }
  }
  ngOnInit(): void {
    
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', language);
  }

  redirectToComponent(){
    this.router.navigate(['']);
  }
}
