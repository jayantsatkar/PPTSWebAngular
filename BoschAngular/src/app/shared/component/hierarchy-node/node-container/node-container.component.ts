import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeirarchyNodeService } from '../../../services/heirarchy-node.service';

@Component({
  selector: 'node-container',
  templateUrl: './node-container.component.html',
  styleUrls: ['./node-container.component.scss'],
})
export class NodeContainerComponent implements OnInit {
  @Input() nodes: MenuItem[] = [];
  @Input() ngStyle: any;
  expandedItem: any;
  constructor(private heirarchyNodeService: HeirarchyNodeService) {}

  ngOnInit(): void {}

  onToggle(item: MenuItem) {
    /**
     * do not remove commented code,it required for future enhancement
     *  if (this.expandedItem === item) {
             this.expandedItem = null;
        } else {
          this.expandedItem = item;
        }
     * */
    if (this.expandedItem !== item) {
      // item.expanded = true;
      this.expandedItem = item;
    } else {
      if (this.expandedItem.target === item.target) {
        const parent = this.heirarchyNodeService.parentOf(this.nodes, item);
        this.expandedItem = parent;
      }
      // item.expanded = false;
    }
  }
}
