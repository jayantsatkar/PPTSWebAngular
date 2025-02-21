import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class backdropService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  isLoading: any;

  show() {
    // console.log('Loader shown');
    this.loadingSubject.next(true);
  }

  hide() {
    // console.log('Loader hidden');
    this.loadingSubject.next(false);
  }
}
