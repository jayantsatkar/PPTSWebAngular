import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drowdown',
  templateUrl: './drowdown.component.html',
  styleUrls: ['./drowdown.component.scss'],
})
export class DrowdownComponent implements OnInit {
  @Input() options: { key: string; value: string }[];
  @Output() optionSelected = new EventEmitter<string>();

  constructor() {}
  ngOnInit(): void {}
  onSelect(event: any): void {
    const value = event?.target?.value; // Null check using optional chaining
    if (value !== null && value !== undefined) {
      console.log('Selected value:', value);
      this.optionSelected.emit(value);
      // Add your logic here
    }
  }
}
