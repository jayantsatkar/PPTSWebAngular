import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { LanguageService } from 'src/app/shared/services/language.service';
import { LanguageService } from '../../services/language.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-wmyfilter',
  templateUrl: './wmyfilter.component.html',
  styleUrls: ['./wmyfilter.component.scss'],
})
export class WMYFilterComponent {
  @Output() wmyFilterEventChange = new EventEmitter<string>();

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.translate.setDefaultLang('en');
  }

  scrapPN: any[] = [];
  selectedscrapPN: string = 'M';

  ngOnInit(): void {
    this._onSubscription();  // Subscribe to language changes
    this.translateLabels();  // Initial call to set labels
  }

  private _onSubscription() {
    setTimeout(() => {
      this.languageService.onLanguageChange$.subscribe({
        next: (language: string) => {
          // Update the language in TranslateService
          this.translate.use(language);

          // Re-translate the labels based on the new language
          this.translateLabels();
        },
      });
    }, 1000);
  }
  translateLabels() {
    this.translate.get([
      'timePeriod.week',
      'timePeriod.month',
      'timePeriod.year',
      'timePeriod.2024'
    ]).subscribe(translations => {
      this.scrapPN = [
        { label: translations['timePeriod.week'], value: 'W' },
        { label: translations['timePeriod.month'], value: 'M' },
        { label: translations['timePeriod.year'], value: 'Y' },
        { label: translations['timePeriod.2024'], value: 'YN', disabled: true }
      ];
    });
  }


  handleButtonClick() {
    this.wmyFilterEventChange.emit(this.selectedscrapPN);
  }
}
