import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-global-table-search',
  templateUrl: './global-table-search.component.html',
  styleUrls: ['./global-table-search.component.scss'],
})
export class GlobalTableSearchComponent implements OnInit {
  searchText: string = '';
  @Output() globalTableSearch = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onTextChangedEvent() {
    this.globalTableSearch.emit(this.searchText);
  }
}
