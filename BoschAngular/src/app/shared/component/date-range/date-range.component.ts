import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { DataShareService } from '../../services/data.share.service';
import moment from 'moment';
import { ToastrMsgService } from '../../services/toastr.service';
import { TranslateService } from '@ngx-translate/core';
//import { LanguageService } from 'src/app/shared/services/language.service';
import { LanguageService } from '../../services/language.service';
@Component({
  selector: 'date-range-filter',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
})
export class DateRangeComponent implements OnInit {
  @ViewChild('picker') picker: MatDateRangePicker<Date> | undefined;
  @Output() onSearch = new EventEmitter();
  @Input() additionalButtonContent: TemplateRef<HTMLElement> | undefined;
  @Input() maxDate: Date | null = null;

  rangeForm: FormGroup ;
  minDate: Date;

  constructor(
    private fb: FormBuilder,
    private dataShareService: DataShareService,
    private toastrMsgService: ToastrMsgService,
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.translate.setDefaultLang('en');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(1);
    this.rangeForm = this.fb.group(
      {
        fromDate: [
          moment(Date()).subtract(0, 'days').format('YYYY-MM-DD'),
          Validators.required,
        ],
        toDate: [
          moment(Date()).subtract(0, 'days').format('YYYY-MM-DD'),
          Validators.required,
        ],
      },
      { validator: this.dateRangeValidator }
    );
  }

  ngOnInit() {
    this._onSubcription();
    this.defaultDateInitiation();
   
    this._onValueChanges();
  }

  private _onSubcription() {
    setTimeout(() => {
      this.languageService.onLanguageChange$.subscribe({
        next: (res: any) => {
          this.translate.use(res);
        },
      });
    }, 1000);
  }

  getMaxDate(allowFutureDates: boolean): Date | null {
    return allowFutureDates ? null : moment().toDate(); // Today's date or null
  }

  private _onValueChanges() {
    this.rangeForm?.valueChanges.subscribe((dateRangeValue) => {
      if (!!dateRangeValue) {
        this.dataShareService.fromDate = moment(dateRangeValue.fromDate).format(
          'YYYY-MM-DD'
        );
        this.dataShareService.toDate = moment(dateRangeValue.toDate).format(
          'YYYY-MM-DD'
        );
      }
    });
  }

  openDatePicker($event: any) {
    this.picker?.open();
  }

  defaultDateInitiation() {
    const date = new Date();
    const oneDayBefore = moment(date).subtract(0, 'days').format('YYYY-MM-DD');
    const fromDate = oneDayBefore;
    const toDate = oneDayBefore;
    this.dataShareService.fromDate = fromDate;
    this.dataShareService.toDate = toDate;
  }

  dateRangeValidator(formGroup: FormGroup) {
    const fromDate = formGroup.get('fromDate')?.value;
    const toDate = formGroup.get('toDate')?.value;

    if (fromDate && toDate && toDate < fromDate) {
      return { invalidDateRange: true };
    }
    return null;
  }

  onDateRangeChange(event: any) {
    this.picker?.open();
    console.log('Date range picker event:', event);
  }

  onButtonClick() {
    if (!!this.fromDate && this.toDate) {
      this.onSearch.emit();
    } else {
      const m1 =
        this.fromDate === null || this.fromDate === undefined
          ? 'From date is missing'
          : 'To date is miising';
      const message = `${m1}}`;
      this.toastrMsgService.showError(message);
    }
  }
  dateFilter = (d: Date): boolean => {
    const date = new Date();
    return d ? d <= date : false;
  };

  date() {
    const today = new Date();
    const twoMonthsAgo = new Date(today);

    // Subtract 2 months from the current date
    twoMonthsAgo.setMonth(today.getMonth() - 2);

    // Adjust for any month rollover issues
    if (twoMonthsAgo.getDate() !== today.getDate()) {
      twoMonthsAgo.setDate(0);
    }
  }
  get fromDate() {
    return this.rangeForm?.get('fromDate');
  }

  get toDate() {
    return this.rangeForm?.get('toDate');
  }
}
