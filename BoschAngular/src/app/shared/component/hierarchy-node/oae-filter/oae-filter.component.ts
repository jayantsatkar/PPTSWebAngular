import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { map, Subject, takeUntil } from 'rxjs';
import { HeirarchyNodeService } from '../../../../shared/services/heirarchy-node.service';
import { UtilService } from '../../../../shared/services/util.service';

@Component({
  selector: 'app-oae-filter',
  templateUrl: './oae-filter.component.html',
  styleUrls: ['./oae-filter.component.scss'],
  animations: [
    trigger('oaeFilterCCollapse', [
      state('expanded', style({ height: '*', opacity: 1 })),
      state('collapsed', style({ height: '0px', opacity: 0 })),
      transition('expanded <=> collapsed', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class OaeFilterComponent implements OnInit, OnDestroy {
  @Input() items: MenuItem[] = [];

  isHomeBreadCrumbMenuClick: boolean = false;
  isShow: boolean = false;
  private _unSubscribe$ = new Subject<void>();
  constructor(
    private heirarchyNodeService: HeirarchyNodeService,
    private route: ActivatedRoute,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {}

  hide() {
    this.isShow = !this.isShow;
    if (this.items.length === 0) {
      this.heirarchyNodeService
        .freshedNode()
        .pipe(takeUntil(this._unSubscribe$))
        .subscribe((_data: MenuItem[]) => {
          if (!this.isHomeBreadCrumbMenuClick) {
            this.freshedFilteredNode(_data);
          } else {
            this.items = _data;
          }
          this.isShow = true;
        });
    }
  }

  hideFilters() {
    this.isShow = false;
  }

  outSideClick() {
    this.isShow = false;
  }

  freshedFilteredNode(_data: MenuItem[]) {
    this.route.queryParams.subscribe((params: any) => {
      /** * filter param for query string */
      if (!!params) {
        const filteredResult = this.utilService
          .findListOfLastNodeByRecursion<MenuItem>(_data, 'plant', params.plantId)
          ?.filter((item) => item.id === params.plantId);
        if (!!filteredResult) this.items = filteredResult;
      }
    });
  }

  adjustPosition() {
    return { position: 'absolute', top: '46px', left: '19px', zIndex: 9 };
  }

  ngOnDestroy(): void {
    this._unSubscribe$.next(undefined);
    this._unSubscribe$.unsubscribe();
  }
}
