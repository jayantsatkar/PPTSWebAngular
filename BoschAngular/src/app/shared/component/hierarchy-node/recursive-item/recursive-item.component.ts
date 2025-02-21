import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeEventEmiter } from '../hierarchy-node.event';
import { HeirarchyNodeService } from '../../../../shared/services/heirarchy-node.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'recursive-item',
  templateUrl: './recursive-item.component.html',
  styleUrls: ['./recursive-item.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('expanded', style({ height: '*', opacity: 1 })),
      state('collapsed', style({ height: '0px', opacity: 0 })),
      transition('expanded <=> collapsed', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class RecursiveItemComponent implements OnInit {
  @Input() item: any;
  @Input() expandedItem: any;
  @Output() toggle = new EventEmitter<any>();
  selectedLabel: string | null = null;
  constructor(private nodeService: HeirarchyNodeService) {}

  ngOnInit(): void {}

  get isExpanded(): boolean {
    return this.expandedItem === this.item || this.nodeService.isParentOf(this.expandedItem, this.item) || this.nodeService.isChildOf(this.expandedItem, this.item)
  }

  onToggle(event: MouseEvent, selectedMenuItem: MenuItem) {
    this.selectedLabel = selectedMenuItem?.label || '';
    this.nodeService.emitEvent(event, selectedMenuItem);
    event.stopPropagation();
    if (this.isExpanded) {
      this.toggle.emit(this.item); /// null can be implemented later on
    } else {
      this.toggle.emit(this.item);
    }
  }

  onToggleSubItem(item: any) {
    this.toggle.emit(item);
  }

  isSelected = (node: any): boolean => this.isExpanded && this.selectedLabel === node?.label;
}
