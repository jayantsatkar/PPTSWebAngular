import { EventEmitter, Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Global } from './global';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { map, Observable, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeirarchyNodeService {
  onRefresh = new EventEmitter();
  onMenuItemClick$ = new EventEmitter();
  nodeItemClick = new EventEmitter<{ $event: any; item: any }>();
  onBreadCrumbItemClick = new EventEmitter<{ $event: any; item: any }>();
  private _menuItem: MenuItem[] = [];
  private _megaMenuItem: MegaMenuItem[] = [];
  private _unSubscribe$ = new Subject<void>();
  private _refreshedNode: MenuItem[] = [];
  constructor(private configService: ConfigService) {}

  getHierarchyNode() {
    this.configService
      .getRequest(Global['GETHIERARCHYNODE'])
      .pipe(takeUntil(this._unSubscribe$))
      .subscribe({
        next: (res: any) => {
          //const jsonString = res as string;
          // const jsonString = JSON.stringify(menuItem);
          const items = res as MenuItem[];
          this._menuItem = this._processItems(items);
          this._refreshedNode = this._menuItem;
        },
        error: (error) => {
          // console.error('Error fetching production details', error);
        },
      });
  }

  freshedNode(): Observable<MenuItem[]> {
    return this.configService.getRequest(Global['GETHIERARCHYNODE']).pipe(
      takeUntil(this._unSubscribe$),
      map((res: any) => {
        const items = res as MenuItem[];
        return this._processItems(items);
      })
    );
  }

  private _processItems(items: any[]): MenuItem[] {
    items.forEach((item: any) => {
      this._processItem(item);
    });
    return items as MenuItem[];
  }

  private _processItem(item: any): void {
    if (item.command) {
      item.command = eval(item.command);
    }
    if (item.items && item.items.length > 0) {
      item.items.forEach((nestedItem: any) => {
        this._processItem(nestedItem);
      });
    }
  }

  private _processMegaMuneItems = (items: MegaMenuItem[]) =>
    items.forEach((item: MegaMenuItem) => this._processItem(item));

  refreshMenu = (isExpandedNedded: boolean) =>
    this.onRefresh.emit(isExpandedNedded);

  emitEvent = <Event, DataItem>($event: Event, item: DataItem): void =>
    this.nodeItemClick.emit({ $event, item });

  breadCrumbItemClick = <Event, DataItem>(
    $event: Event,
    item: DataItem
  ): void => this.onBreadCrumbItemClick.emit({ $event, item });

  isParentOf = (expandedItem: MenuItem, item: MenuItem) =>
    !expandedItem || !item.items
      ? false
      : item.items.includes(expandedItem)
      ? true
      : item.items.some((subItem: MenuItem) =>
          this.isParentOfRecursive(subItem, expandedItem)
        );

  isParentOfRecursive = (parent: MenuItem, item: MenuItem): any =>
    !parent.items
      ? false
      : parent.items.includes(item)
      ? true
      : parent.items.some((subItem: MenuItem) =>
          this.isParentOfRecursive(subItem, item)
        );

  isChildOf = (expandedItem: MenuItem, item: MenuItem) =>
    !item.items
      ? false
      : item.items.includes(expandedItem) ||
        item.items.some((subItem: MenuItem) =>
          this.isParentOfRecursive(subItem, expandedItem)
        );
        
  parentOf(items: MenuItem[], expandedItem: MenuItem): MenuItem | null {
    for (let item of items) {
      if (item.items && item.items.includes(expandedItem)) {
        return item;
      } else if (item.items) {
        const parent = this.parentOf(item.items, expandedItem);
        if (parent) {
          return parent;
        }
      }
    }
    return null;
  }

  get menuItem() {
    return this._menuItem;
  }

  set menuItem(_nodes: MenuItem[]) {
    this._menuItem = _nodes;
  }

  get megaMenuItem() {
    return this._megaMenuItem;
  }

  set megaMenuItem(megaMenu: MegaMenuItem[]) {
    this._megaMenuItem = [...megaMenu];
  }
}
