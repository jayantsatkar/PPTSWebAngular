import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
// import { EnterpriseNode } from 'src/app/modules/model/enterprise-root-node.model';
import {EnterpriseNode } from '../../modules/model/enterprise-root-node.model'
@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}
  private _listOfLastNode: any[] = [];

  convertToEnterpriseNodes(
    data: { key: string; value: string }[]
  ): EnterpriseNode[] {
    return data.map((item) => ({
      key: item.key,
      value: item.value,
    }));
  }

  addUniqueItem<T>(array: T[], item: T, key: keyof T): T[] {
    // Remove any existing items with the same key value
    array = array.filter((existingItem) => existingItem[key] !== item[key]);

    // Add the new item
    array.push(item);
    return array;
  }

  findIdByRecursion<T>(items: any[], label: string): T | null {
    for (let item of items) {
      if (item?.label === label) {
        return item.id;
      }
      if (item.items && item.items.length > 0) {
        const foundId = this.findIdByRecursion(item.items, label);
        if (foundId) {
          return foundId as T;
        }
      }
    }
    return null;
  }

  /**
   * TODO : for batter refactor  or batter code as performancewize
   * @param items
   * @param selectedNodeId
   * @param selectedRootNodeLabel
   * @returns
   */

  findRootNodeByRecursion<T>(
    items: any[],
    selectedNodeId: string,
    selectedRootNodeLabel: string
  ): T | null {
    for (let item of items) {
      const [itemLabel, selectedRootLabel] = [
        this.normalizeString(item.label),
        this.normalizeString(selectedRootNodeLabel),
      ];

      if (!!itemLabel && !!selectedRootLabel) {
        if (item.id === selectedNodeId && itemLabel === selectedRootLabel) {
          return item;
        }
        if (item.items && item.items.length > 0) {
          const data = this.findRootNodeByRecursion(
            item.items,
            selectedNodeId,
            selectedRootLabel
          );
          if (data) {
            return data as T;
          }
        }
      }
    }
    return null;
  }

  normalizeString(input: string): string {
    // Convert the string to lowercase
    let result = input.toLowerCase();
    // Remove white spaces and special characters
    result = result.replace(/[^a-z0-9]/g, '');
    return result;
  }

  findListOfLastNodeByRecursion<T>(
    items: any[],
    targetType: string,
    id: string
  ): T[] | null {
    for (let item of items) {
      if (item.target === targetType && item.id === id) {
        return items as T[];
      }
      /**TODO
       * if there is better way to achive root node list
       * Refactore the code by using generic type
       */
      if (item.items && item.items.length > 0) {
        const data = this.findListOfLastNodeByRecursion(
          item.items,
          targetType,
          id
        );
        if (data) {
          return data as T[];
        }
      }
    }
    return null;
  }

  getLastElement<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[array.length - 1] : undefined;
  }

  parseJSON<T>(data: string): T | null {
    try {
      return JSON.parse(data);
    } catch {
      console.error('Failed to parse JSON');
      return null;
    }
  }

  // Recursive function to process menu nodes
  processMenuNodes<T>(nodes: any[], selectedNode: any): void {
    let selectedNodeLabel = this.normalizeString(
      selectedNode.label
    ).toLowerCase();
    nodes.forEach((node: any) => {
      const nodeLabel = this.normalizeString(node.label).toLowerCase();
      if (!!selectedNode) {
        if (node.id !== selectedNode?.id && nodeLabel !== selectedNodeLabel)
          node.expanded = false;
        // If the node has children, recursively process them
        if (node.items && node.items.length > 0) {
          this.processMenuNodes(node.items, selectedNode);
        }
      }
    });
  }

  overideMenuNodesBehaviour<
    T extends { id: string; expanded?: boolean; visible?: boolean; items?: T[] }
  >(nodes: T[], selectedNode: T | null): void {
    nodes.forEach((node: T) => {
      if (selectedNode) {
        if (node.id !== selectedNode.id) {
          node.expanded = false;
          //node.visible = true;
        }
        // If the node has children, recursively process them
        if (node.items && node.items.length > 0) {
          this.overideMenuNodesBehaviour(node.items, selectedNode);
        }
      }
    });
  }
}
