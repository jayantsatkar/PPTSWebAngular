import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbSubject: BehaviorSubject<MenuItem[]> = new BehaviorSubject<
    MenuItem[]
  >([]);
  private breadcrumbs: MenuItem[] = [];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.updateBreadcrumbs();
      });
  }

  getBreadcrumbs() {
    return this.breadcrumbSubject.asObservable();
  }

  private updateBreadcrumbs() {
    const rootUrl = this.router.url.split('?')[0];
    const segments = rootUrl.split('/').filter((segment) => segment);

    const breadcrumbItems: MenuItem[] = [{ label: '', routerLink: '/master-dashboard' }];

    segments.forEach((segment, index) => {
      const url = `/${segments.slice(0, index + 1).join('/')}`;
      breadcrumbItems.push({
        label: this.capitalize(segment),
        routerLink: url,
      });
    });

    this.breadcrumbSubject.next(breadcrumbItems);
  }

  private capitalize(word: string): string {
    if (word === 'focusfactory') {
      word = 'focus-Factory';
    }
    if (word === 'linedetails') {
      word = 'Line';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
