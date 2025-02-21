import { EventEmitter, Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {
  BreadcrumItem,
  FilterBy,
  SlideMenuKvp,
} from 'src/app/modules/model/enterprise-root-node.model';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class BreadCrumbMenuItemService {
  onBreadCrumbItemClick$ = new EventEmitter();
  private _breadcrumItem: BreadcrumItem[] = [];
  private _breadcrumCurrentNode: BreadcrumItem;
  private _recursedMenuItem: MenuItem[] = [];

  constructor(private utilService: UtilService) {}

  onBreadCrumbItemClick(item: MenuItem) {
    this.onBreadCrumbItemClick$.next(item);
  }

  constructBreadcrumbTrail(
    menuItem: MenuItem[],
    selectedNodeId: string,
    selectedRootNodeLabel: string
  ): void {
    const currentNode = this.utilService.findRootNodeByRecursion<SlideMenuKvp>(
      menuItem,
      selectedNodeId,
      selectedRootNodeLabel
    );

    if (currentNode) {
      this.breadcrumItem = this.constructBreadcrumbWithEventTrail(currentNode);
    }
  }

  popRestFromSelectedByKey(arr: BreadcrumItem[], selectedItem: BreadcrumItem) {
    const index = arr.findIndex(
      (item) => item.key === selectedItem.key && item.type === selectedItem.type
    );
    if (index === -1) {
      // Item not found in the array
      this._breadcrumItem = arr;
      // return arr;
    }
    // Remove items from the selected index to the end of the array
    arr.splice(index + 1);
    this._breadcrumItem = arr;
    // return arr;
  }

  popRestFromSelectedNodeType(arr: BreadcrumItem[], selectedItem: BreadcrumItem) {
    const index = arr.findIndex(
      (item) => item.type === selectedItem.type
    );
    if (index === -1) {
      // Item not found in the array
      this._breadcrumItem = arr;
      // return arr;
    }
    // Remove items from the selected index to the end of the array
    arr.splice(index + 1);
    this._breadcrumItem = arr;
    // return arr;
  }

  isCurrentNodeExist<T>(array: T[], item: T, key: keyof T): boolean {
    // Check if any item in the array has the same key value as the given item
    const exists = array.some(
      (existingItem) => existingItem[key] === item[key]
    );

    return exists;
  }

  private constructBreadcrumbWithEventTrail(
    menuKvp: SlideMenuKvp
  ): BreadcrumItem[] {
    return (
      this.utilService.addUniqueItem(
        this.breadcrumItem,
        {
          key: menuKvp.id,
          label: menuKvp.label,
          type: menuKvp.target,
          command: '(event) => this.onBreadCrumbItemClick(event)',
        },
        'type'
      ) || []
    );
  }

  private _addItemEvent<T>(items: BreadcrumItem[]): BreadcrumItem[] {
    return items.map((item: BreadcrumItem) => {
      if (typeof item.command === 'string') {
        const commandFunction = eval(item.command);
        if (commandFunction) {
          item.command = commandFunction;
        } else {
          console.warn(`Command "${item.command}" not found in registry.`);
        }
      }
      return item;
    });
  }

  get breadcrumItem() {
    return this._breadcrumItem;
  }

  set breadcrumItem(items: BreadcrumItem[]) {
    this._breadcrumItem = [...items];
    this._addItemEvent(this._breadcrumItem);
  }

  get isExistCurrentNode(): boolean {
    return this.breadcrumItem.some(
      (existingItem) =>
        existingItem['type'] === this._breadcrumCurrentNode['type']
    );
  }

  get breadcrumCurrentNode(): BreadcrumItem {
    return this._breadcrumCurrentNode || ({} as BreadcrumItem);
  }

  set breadcrumCurrentNode(item: any) {
    this._breadcrumCurrentNode = {
      key: item.id as string,
      label: item.label as string,
      type: item.target as string,
      command: '(event) => this.onBreadCrumbItemClick(event)',
    };
  }

  get recursedMenuItem(): MenuItem[] {
    return this._recursedMenuItem;
  }

  set recursedMenuItem(value: any) {
    if (!!value) {
      const filterBy = value as FilterBy;
      const result = this.utilService
        .findListOfLastNodeByRecursion<MenuItem>(
          filterBy.menuItems,
          'plant',
          filterBy.id
        )
        ?.filter((item) => item.id === filterBy.id);
      if (!!result) this._recursedMenuItem = result;
    }
  }

  resetBreadCrumb() {
    // Filter out items that do not match the type of the current breadcrumb node as MenuItem[];
    // Add the current breadcrumb node to the filtered items
    this.breadcrumItem = [...this._breadcrumItem.filter(item => item.type !== this.breadcrumCurrentNode['type']), this.breadcrumCurrentNode];
  }
}
