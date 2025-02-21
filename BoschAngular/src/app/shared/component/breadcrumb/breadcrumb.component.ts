import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { ModularEventService } from '../../services/modular.event.service';
import { APP_CONSTANT } from '../../const/app.const';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbItems: MenuItem[];
  languageSubscription: Subscription = new Subscription();
  home: MenuItem;
  constructor(
    private breadcrumbService: BreadcrumbService,
    private modularEventService: ModularEventService,
    private languageService: LanguageService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.breadcrumbService.getBreadcrumbs().subscribe((items) => {
      this.breadcrumbItems = items.filter((item) => item.label !== 'Home');
      //this.breadcrumbItems = items;
    });
    this.home = {
      label: '',
      routerLink: '',
    };

    this.languageSubscription =
      this.languageService.onLanguageChange$.subscribe((language: string) => {
        this.translate.use(language); // Change the language in TranslateService
        this.loadTranslation(this.breadcrumbItems); // Call the translation logic
      });
  }

  loadTranslation(breadcrumb: any): void {
    const labels = breadcrumb.map((i: { label: any }) => i.label);

    this.translate.get(labels).subscribe((translations: any) => {
      // Clear breadcrumbItems before adding
      this.breadcrumbItems = [];

      breadcrumb.forEach((item: any) => {
        const translatedLabel = translations[item.label] || 'No Value Found'; // Check if translation exists
        if (item.label) {
          this.breadcrumbItems.push({
            label: translatedLabel,
            routerLink: item.routerLink, // Assuming routerLink is part of breadcrumb object
          });
        }
      });
    });
  }

  onBreadcrumbClick($event: any) {
    let selectedFocusFactory = localStorage.getItem('focusFactory') as any;
    switch ($event.item.label) {
      case 'Rybnik':
        this.modularEventService.isForward = false;
        break;
      case 'Focus-Factory':
        this.modularEventService.isForward = false;
        this.modularEventService.modularEnterprisesFilters({
          currentNodeType: APP_CONSTANT.FocusFactory as any,
          focusFactory: null,
          zone: null,
          line: null,
        });
        break;
      case 'Zone':
        const zoneId = localStorage.getItem('zone') as any;
        this.modularEventService.zone = zoneId;
        this.modularEventService.isForward = false;
        this.modularEventService.modularEnterprisesFilters({
          currentNodeType: APP_CONSTANT.FocusFactory as any,
          focusFactory: selectedFocusFactory,
          line: null,
          zone: zoneId,
          isForward: false,
        });
        break;
      case 'Line':
        this.modularEventService.isForward = false;
        this.modularEventService.modularEnterprisesFilters({
          currentNodeType: APP_CONSTANT.Zone as any,
          focusFactory: selectedFocusFactory,
          zone: null,
          line: null,
        });
        break;
      default:
        break;
    }
  }
}
