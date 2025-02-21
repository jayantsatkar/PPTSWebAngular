import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
//import { LanguageService } from 'src/app/shared/services/language.service';
import { LanguageService } from '../../services/language.service';
@Component({
  selector: 'nodata-found',
  templateUrl: './nodata-found.component.html',
  styleUrls: ['./nodata-found.component.scss']
})
export class NodataFoundComponent implements OnInit {
  languageSubscription: Subscription = new Subscription();
  @Input() dataList: any[] = [];
  @Input() colSpan: number;
  @Input() displayPreText: string;
  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.translate.setDefaultLang('en');
    this.colSpan = 0;
    this.displayPreText ='';
  }

  ngOnInit(): void {
    this._onSubcription();
  }
  private _onSubcription() {
    setTimeout(() => {
      this.languageService.onLanguageChange$.subscribe({
        next: (res: any) => {
          this.translate.use(res);
        },
      });
    }, 1000);
  }
}
