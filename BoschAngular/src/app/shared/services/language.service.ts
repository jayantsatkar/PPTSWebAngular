import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private _language: string = 'en';

  onLanguageChange$: BehaviorSubject<string> = new BehaviorSubject<string>(this._language);

  $event: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
  onLanguacheChange(language: string) {
    ///this.$event.emit(language);
    this._language = language;
    this.onLanguageChange$.next(language)
  }

  get language() {
    return this._language;
  }
}
