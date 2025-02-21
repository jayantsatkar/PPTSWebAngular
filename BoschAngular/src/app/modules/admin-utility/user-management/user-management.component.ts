import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
//import { ConfigService } from 'src/app/shared/services/config.service';
import { ConfigService } from '../../../shared/services/config.service';

import { Global } from '../../../shared/services/global';

import { ToastrMsgService } from '../../../shared/services/toastr.service';
import { MatDialogModule } from '@angular/material/dialog';
import { LoaderService } from '../../../shared/services/loader.service';
import moment from 'moment';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  displayDialog: any;
  authDialog: any;
  createUser: any;
  importRole: boolean = false;
  isFileValid: boolean = true;
  isEditMode: boolean = false;
  isExcelbtnDisabled: boolean = false;

  rowsPerPageOptions = [5, 10, 20];
  first: number = 0;
  rows: number = 10;
  page: number = 10;
  plantID: any;
  totalRecords: number = 0;
  product: any[] = [];

  actionItems: MenuItem[] = [];
  selectedProduct: any;
  activeProductId: number | null = null;

  formData = {
    name: '',
    module: '',
    form: '',
  };

  user = {
    loginName: '',
    rolename: '',
    passward: '', 
    confirmPassward: '',
    firstName: '',
    middleName: '',
    lastName: '',
    emailAddress: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pinCode: '',
    mobileNum: '',
    employeeId: '',
    isActive: false
  };

  constructor(
    private toastrMsgService: ToastrMsgService,
    private configService: ConfigService, 
    private router: Router,
    private loaderService: LoaderService,
  ) {}

  ngOnInit(): void {
    this.initializeMenu();
  }

  private initializeMenu(): void {
    this.items = [{ label: 'User Management' }];
    this.home = { label: 'Home', routerLink: '' };
  }

  openDialog(): void {
    this.authDialog = true;
  }

  onRoleAuthSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted:', this.formData);
      this.resetForm(form);
      this.closeDialog();
    }
  }

  showActionMenu(event: any, product: any) {
    this.selectedProduct = product;
    this.actionItems = [
      { label: 'Edit', icon: 'fa fa-edit', command: () => this.editProduct(product) },
      { label: 'ConfigFingerPrint', icon: 'fa fa-trash', command: () => this.configFingerPrintProduct(product) }
    ];

    event.preventDefault();
    const menu = event.target.nextElementSibling;
    menu.show(event);
  }

  resetForm(form: any): void {
    form.resetForm();
    this.formData = { name: '', module: '', form: '' };
  }
  public toggleActions(product: any, rowIndex: number): void {
    this.product.forEach(p => p.showActions = false);
    product.showActions = !product.showActions;
    this.activeProductId = product.showActions ? rowIndex : null;
  }

  editProduct(product: any): void {
    this.router.navigate(['/admin-utility/user-management/create-user'], {
      queryParams: {
        loginName: product.LoginId,
        firstName: product.FirstName,
        lastName: product.LastName,
        emailAddress: product.EmailId,
        address: product.Address,
        city: product.City,
        state: product.State,
        country: product.Country,
        pinCode: product.PinCode,
        mobileNum: product.MobileNum,
        employeeId: product.EmployeeId,
        isActive: product.IsActive
      }
    });
  }

  configFingerPrintProduct(product: any): void {
    console.log('ConfigFingerPrintProduct:', product);
  }

  onTextChangedEvent(event: any) {
    console.log("search called");
  }

  importRoleDialog() {
    this.importRole = true;
  }

  onRoleImportSubmit(form: any) {
    if (!this.isFileValid) {
      this.toastrMsgService.showError('Please select a valid CSV file before submitting.');
      return;
    }
    console.log('Form submitted:', form);
  }

  loadRolesData(event: any) {
    const payload = {
      pageNo: (event.first / event.rows + 1),
      pageSize: event.rows,
      text: ""
    };

    this.getUsersData(payload);
  }

  getUsersData(payload: any) {
    this.configService.postRequest(Global['GET_USERS'], payload).subscribe({
      next: (response: any) => {
        if (response && response.length > 0) {
          this.isExcelbtnDisabled = false;
          this.totalRecords = response[0].TotalRowCount;
          this.product = response;
        } else {
          this.isExcelbtnDisabled = true;
          this.product = [];
          this.first = 0;
          this.totalRecords = 0;
        }
      },
      error: (err: any) => {
        console.error('Error fetching users data:', err);
        this.isExcelbtnDisabled = true;
        this.product = [];
        this.totalRecords = 0;
      }
    });
  }

  onExcelDownload(): void {
    this.loaderService.show();
    if (this.product && this.product.length > 0) {
      this.exportToExcel(this.product);
    } else {
      this._hideLoader();
      this.toastrMsgService.showWarning('No Record Found!');
    }
  }

  private _hideLoader() {
    setTimeout(() => {
      this.loaderService.hide();
    }, 1000);
  }

  private exportToExcel(data: any[]): void {
    const dateTimeString = moment().format('YYYY-MM-DD_HH-mm-ss');
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const filename = `User_Management_${dateTimeString}.xlsx`;
    XLSX.writeFile(wb, filename);
    this._hideLoader();
  }

  closeDialog() {
    this.authDialog = false;
    this.createUser = false;
    this.importRole = false;
    this.isEditMode = false;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.type === 'text/csv') {
        console.log('CSV file selected:', file.name);
        this.isFileValid = true;
      } else {
        this.isFileValid = false;
        this.toastrMsgService.showError('Please select a valid CSV file.');
      }
    }
  }

  clearFile() {
    const fileInput: any = document.getElementById('csvUpload');
    fileInput.value = '';
    this.isFileValid = true;
    console.log('File input cleared');
  }

  addCreateUserDialog() {
    this.router.navigate(['/admin-utility/user-management/create-user']);
    this.isEditMode = false;
    this.user = {
      loginName: '',
      rolename: '',
      passward: '',
      confirmPassward: '',
      firstName: '',
      middleName: '',
      lastName: '',
      emailAddress: '',
      address: '',
      city: '',
      state: '',
      country: '',
      pinCode: '',
      mobileNum: '',
      employeeId: '',
      isActive: false
    };
    this.createUser = true;
  }

  handleGlobalTableSearch(event: any) {
    console.log(event);
  }

  onpaginationfilter(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    const payload = {
      pageNo: (this.first / this.rows + 1),
      pageSize: this.rows,
      text: ""
    };

    this.getUsersData(payload);
  }
}
