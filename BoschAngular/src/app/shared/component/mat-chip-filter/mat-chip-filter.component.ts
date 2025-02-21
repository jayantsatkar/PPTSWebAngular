import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Level } from '../../const/level';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormDataApiService } from '../../services/form-data-api.service';
//import { FormDataModel } from 'src/app/modules/model/form-data.model';

import {FormDataModel } from '../../../modules/model/form-data.model';

import { MatChipFilterService } from '../../services/mat-chip-filter.service';
import {
  MAP_CONFIG_ONCHIP_EVENT,
  MAP_CONFIG_ON_REMOVE_CHIP,
  MAP_CONFIG_STEPS,
} from '../../config/mat-chip-filter-const.config';
import { PLANT_FILTER_TYPE } from '../../const/app.const';
import { UtilService } from '../../services/util.service';
import appConfig from '../../../../assets/appConfig.json';

@Component({
  selector: 'app-mat-chip-filter',
  templateUrl: './mat-chip-filter.component.html',
  styleUrls: ['./mat-chip-filter.component.scss'],
})
export class MatChipFilterComponent implements OnInit, OnDestroy {
  curLevel = 0;
  plantID: any;
  allCrumbs: Level[] = [];
  crumbCtrl = new FormControl('');
  filteredCrumbs!: Observable<Level[]>;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  plantIdEdenkoben: any = appConfig.plantIdEdenkoben.toString();
  crumbs: Level[] = [
    {
      iid: Date.now(),
      id: this.plantIdEdenkoben,
      title: 'Edenkoben',
      levelNo: 0,
      target: 'plant',
    },
  ];

  formDataModel = {
    curLevel: 0,
    divisionId: 1,
    plantId: this.plantIdEdenkoben,
    chipItems: [
      {
        iid: Date.now(),
        id: this.plantIdEdenkoben,
        title: 'Edenkoben',
        levelNo: 0,
        target: 'plant',
      },
    ],
  } as FormDataModel;

  @Input() componetFrom: string ='';
  @ViewChild('crumbInput') crumbInput!: ElementRef<HTMLInputElement>;
  @Output() chipSelectionEventChange = new EventEmitter<FormDataModel>();
  @Output() chipRemoveEventChange = new EventEmitter<FormDataModel>();
  @Output() chipAddEventChange = new EventEmitter<FormDataModel>();
  private _isProceedForNextSearch: boolean = true;
  isdisplaySelectNext = true;
  private _ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(
    private formDataApiService: FormDataApiService,
    private matChipFilterService: MatChipFilterService,
    private utilService: UtilService
  ) {
    this._loadMatChipData();
  }

  ngOnInit(): void {
    this._onSubscription();
  }

  private _loadMatChipData(currentSelectedChip?: Level) {
    this.formDataApiService
      .getFormData(this.formDataModel, currentSelectedChip)
      .pipe(
        takeUntil(this._ngUnsubscribe),
        map((data) => {
          this._handleResponse(data);
          if (this.isLastNode) {
            this.isProceedForNextSearch = false;
          } else if (
            this.componetFrom === 'plantlevellineasset' &&
            this.selectedChipTarget === PLANT_FILTER_TYPE.LINE
          ) {
            this.isProceedForNextSearch = false;
          }
        })
      )
      .subscribe();
  }

  private _handleResponse(res: any) {
    const findNextStep = MAP_CONFIG_STEPS[this.selectedChipTarget];
    this.formDataModel.curLevel = findNextStep.level;
    if (!!res && this.selectedChipTarget !== 'nonext') {
      this.allCrumbs = res.map((item: any) => ({
        iid: Date.now(),
        id: item.id,
        title: item.name,
        levelNo: this.formDataModel.curLevel || 0,
      }));
      this._isProceedForNextSearch = true;
      this.updateCrumbs();
    } else {
      this._isProceedForNextSearch = false;
      this.allCrumbs = [];
    }
  }

  removeChipOnChipItemClick(selectedChip: Level) {
    this._handleChipRemoval(selectedChip, true, false);
  }

  removeChip(crumb: Level): void {
    this._handleChipRemoval(crumb, false, true);
  }

  private _handleChipRemoval(
    chip: Level,
    isOnChipSelection: boolean = false,
    isChipRemoved: boolean = false
  ): void {
    const currentFormDataModel = this.formDataModel.chipItems.find(
      (item) => item.target === chip.target
    );

    if (!currentFormDataModel?.target) return;
    const isCurrentTargetExist = this.formDataModel.chipItems.some(
      (item) => item.target === currentFormDataModel.target
    );

    if (!isCurrentTargetExist) return;
    const config = isOnChipSelection
      ? MAP_CONFIG_ONCHIP_EVENT[currentFormDataModel.target]
      : MAP_CONFIG_ON_REMOVE_CHIP[currentFormDataModel.target];
    this.formDataModel.curLevel = config.level;

    this.isProceedForNextSearch =
      isOnChipSelection && config.removeNextLevel.length === 0 ? false : true;

    /**
     * preparing payload for expose to application
     */
    const chipItems = this.crumbs.filter(
      (item) => !config.removeNextLevel.includes(item.target!!)
    );
    this.crumbs = [...chipItems];

    this.formDataModel.chipItems = [...this.crumbs];
    const prevChipFormModel = isChipRemoved
      ? (this.crumbs.find((item) => item.target === config.prev) as Level)
      : currentFormDataModel;

    const updateCurrentModel = {
      ...prevChipFormModel,
      target: chip.target,
    };

    const formPayLoad = isOnChipSelection
      ? currentFormDataModel
      : updateCurrentModel;

    this._loadMatChipData(formPayLoad);
    this.matChipFilterService.updateFormDataModel(
      this.formDataModel,
      formPayLoad,
      isOnChipSelection,
      isChipRemoved
    );
    this.chipRemoveEventChange.emit(this.formDataModel);
    // Ensure the input loses focus
    this.crumbInput?.nativeElement?.blur();
  }

  private _removeChipFromSelectedPanel(crumb: Level): void {
    const index = this.crumbs.findIndex((f) => f.iid === crumb.iid);
    if (index >= 0) {
      this.crumbs.splice(index, this.crumbs.length - 1);
    }
  }

  addChip(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (!!value)
      this.crumbs = [...this.matChipFilterService.addMatChips(value)];

    event.chipInput!.clear();
    this.crumbCtrl.setValue(null);
  }

  private _onSubscription() {
    this.filteredCrumbs = this.crumbCtrl.valueChanges.pipe(
      startWith(null),
      map((crumb: string | null) =>
        crumb
          ? this.matChipFilterService.filterMatChips(crumb, this.allCrumbs)
          : this.allCrumbs.slice()
      )
    );
  }

  updateCrumbs() {
    this.filteredCrumbs = this.crumbCtrl.valueChanges.pipe(
      startWith(null),
      map((crumb: string | null) =>
        crumb
          ? this.matChipFilterService.filterMatChips(crumb, this.allCrumbs)
          : this.allCrumbs.slice()
      )
    );
  }

  onAutocompleteSelected(event: MatAutocompleteSelectedEvent): void {
    const selectedChip: Level = this._getSelectedCrumb(
      event.option.viewValue
    ) as Level;

    if (selectedChip && !this._isCrumbAlreadySelected(selectedChip.iid)) {
      this.crumbs.push(selectedChip);
    }

    this._resetCrumbInput();
    this._loadMatChipData(selectedChip);

    let updateSelectedChip = {} as Level;
    if (this.selectedChipTarget !== 'nonext') {
      this.crumbs = this.crumbs.map((_c) => ({
        ..._c,
        target:
          this.utilService.normalizeString(_c.title) ===
          this.utilService.normalizeString(selectedChip.title)
            ? this.selectedChipTarget
            : _c.target, // Keep the existing target value if no match
      }));
      updateSelectedChip = {
        ...selectedChip,
        target: this.selectedChipTarget,
      } as Level;
    }

    this.matChipFilterService.updateFormDataModel(
      this.formDataModel,
      updateSelectedChip
    );
    this.chipSelectionEventChange.emit(this.formDataModel);
    this.crumbInput.nativeElement.blur();
  }

  private _getSelectedCrumb(viewValue: string): any | undefined {
    return this.allCrumbs.find((c) => c.title === viewValue);
  }

  private _isCrumbAlreadySelected = (iid: number): boolean =>
    this.crumbs.some((f) => f.iid === iid);

  private _resetCrumbInput(): void {
    this.crumbInput.nativeElement.value = '';
    this.crumbCtrl.setValue(null);
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next(undefined);
    this._ngUnsubscribe.unsubscribe;
    this.formDataModel = {} as FormDataModel;
  }

  get selectedChipTarget() {
    return this.formDataApiService.currentSelectedChipTarget;
  }

  get isLastNode() {
    return this.selectedChipTarget === PLANT_FILTER_TYPE.ASSET;
  }

  set isProceedForNextSearch(value: boolean) {
    this._isProceedForNextSearch = value;
  }

  get isProceedForNextSearch() {
    return this._isProceedForNextSearch;
  }
}
