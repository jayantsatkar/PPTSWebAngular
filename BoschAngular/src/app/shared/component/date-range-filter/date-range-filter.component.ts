import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'date-range-filter',
  templateUrl: './date-range-filter.component.html',
  styleUrls: ['./date-range-filter.component.scss']
})
export class DateRangeFilterComponent implements OnInit {

  rangeForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.rangeForm = this.fb.group({
      rangeDates: [null]
    });
  }

  get dateRange() {
    return this.rangeForm.get('rangeDates');
  }



}
