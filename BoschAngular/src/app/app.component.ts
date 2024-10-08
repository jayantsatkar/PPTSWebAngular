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
  title = 'Shelf Life Dashboard';
  items: MegaMenuItem[] | undefined;
  languages : any[]=[{id:1, language:'English'},
    {id:2, language:'German'}
  ]
  selectedLanguage : any;// = 'English';
  clockIntervalId: any;
  currentTime: string = '';
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
    this.selectedLanguage = this.languages[0];
    this.updateTime();

    // Update the time every second
    this.clockIntervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  
  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', language);
  }

  redirectToComponent(){
    this.router.navigate(['']);
  }

  toggle(eve: any) {
    // if (eve.target.checked == true) {
    if (eve.value.language == 'German') {
      this.useLanguage('de');
    } else {
      this.useLanguage('en');
    }
  }
}
