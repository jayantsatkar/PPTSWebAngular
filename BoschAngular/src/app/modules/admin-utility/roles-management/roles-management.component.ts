import { Component, DebugElement, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import moment from 'moment';
import { MenuItem } from 'primeng/api';
//import { ConfigService } from '../../../src/app/shared/services/config.service';
import {ConfigService} from '../../../shared/services/config.service'
import { Global } from '../../../shared/services/global';
import { LoaderService } from '../../../shared/services/loader.service';
import { ToastrMsgService } from '../../../shared/services/toastr.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-roles-management',
  templateUrl: './roles-management.component.html',
  styleUrls: ['./roles-management.component.scss']
})
export class RolesManagementComponent implements OnInit {

  // private payload_data = {
  //   pageNumber: '1',
  //   pageSize: '10',
  //   text: ""
  // }

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;;
  displayDialog: any;
  authDialog: any;
  addRole: any;
  deletedBy: any;
  element: any;

  importRole: boolean = false;
  isFileValid: boolean = true;
  isEditMode: boolean = false;
  isExcelbtnDisabled: boolean = false;

  first: number = 0;
  rows: number = 10;
  page: number = 10;
  wordLimit = 1;

  totalRecords: number = 0;
  rowsPerPageOptions: number[] = [10, 20, 30, 50];
  roleDetails: any[] = [];
  payload_data: any;

  // Action dialog
  actionItems: MenuItem[] = [];
  selectedProduct: any;
  activeProductId: number | null = null;

  // Role auth Dialog
  name: string = '';
  module: string = '';
  form: string = '';
  role = {
    rolename: '',
    description: '',
    roleCode: '',
    isActive: false,
  };

  constructor(
    private toastrMsgService: ToastrMsgService,
    private configService: ConfigService, 
    private router: Router,
    private loaderService: LoaderService,

  ) { }

  ngOnInit() {
    const UserId = Number(sessionStorage.getItem('userId')) || 0;
    this.deletedBy = UserId;
    this.initializeMenu();
  }

  private initializeMenu(): void {
    this.items = [{ label: 'Role Management' }];
    this.home = { label: 'Admin Utility', routerLink: '' };
  }

  // wordLimit = 1;
  searchText = ""; // To store the current search text
  
  onTextChangedEvent(input: string) {
    this.searchText = input;  // Store the search text
  
    // Trigger the API request with the new search text
    const payload = {
      pageNumber: (this.first / this.rows + 1).toString(),
      pageSize: this.rows.toString(),
      text: this.searchText || "",  // If there's no search text, send empty string
    };
    
    this.getRolesData(payload);
  }
  
  onpaginationfilter(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  
    // Create the payload with pagination and the current search text
    const payload = {
      pageNumber: (this.first / this.rows + 1).toString(),
      pageSize: this.rows.toString(),
      text: this.searchText || "",  // Use the stored search text
    };
  
    this.getRolesData(payload);
  }
  
  loadRolesData(event: any) {
    console.log('Pagination event triggered:', event);
    
    // Create the payload with pagination and the current search text
    const payload = {
      pageNumber: (event.first / event.rows + 1).toString(),
      pageSize: event.rows.toString(),
      text: this.searchText || "",  // Use the stored search text
    };
    
    this.getRolesData(payload);
  }

getRolesData(payload: any) {
  this.configService.postRequest(Global['GET_ROLES'], payload).subscribe({
    next: (response: any) => {
      if (response && response.length > 0) {
        this.isExcelbtnDisabled = false;
        this.totalRecords = response[0].TotalRowCount;
        this.roleDetails = response;
        console.log(this.roleDetails, "Mapped response for roles");
      } else {
        this.isExcelbtnDisabled = true;
        this.roleDetails = [];
        this.first = 0;
        this.totalRecords = 0;
      }
    },
    error: (err) => {
      console.error('Error fetching roles data:', err);
      this.isExcelbtnDisabled = true;
      this.roleDetails = [];
      this.totalRecords = 0;
    }
  });
}


  deleteProduct(role: any) {
    const payload = {
      deletedBy: this.deletedBy,
      id: role.id
    };
    this.configService
      .deleteById(Global['DELETE_ROLE'], payload)
      .subscribe({
        next: (response: any) => {
          if (response && response.success) {
            console.log('Role deleted successfully');
            // Remove the deleted role from the list
            this.roleDetails = this.roleDetails.filter((r) => r.id !== role.id);
          } else {
            // Handle error
            console.log('Error deleting role', response);
          }
        },
        error: (err) => {
          console.error('API call failed', err);
        }
      });
  }

  private _hideLoader() {
    setTimeout(() => {
      this.loaderService.hide();
    }, 1000);
  }

  onExcelDownload(_event: any): void  {
    this.loaderService.show();
    if (
      this.roleDetails &&
      this.roleDetails.length > 0
    ) {
      this.exportToExcel(this.roleDetails);
    } else {
      this._hideLoader();
      this.toastrMsgService.showWarning('No Record Found!');
      console.warn('No data available for export');
    }
  }

  private exportToExcel(data: any[]): void {
    const dateTimeString = moment().format('YYYY-MM-DD_HH-mm-ss');
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const filename = `Role_Management_${dateTimeString}.xlsx`;
    XLSX.writeFile(wb, filename);
    this._hideLoader();
  }

  toggleActions(roleDetails: any, rowIndex: number) {
    this.roleDetails.forEach(p => p.showActions = false);
    roleDetails.showActions = !roleDetails.showActions;
    this.activeProductId = roleDetails.showActions ? rowIndex : null;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.popup-menu') && !clickedElement.closest('.menu-icon')) {
      this.roleDetails.forEach(p => p.showActions = false);
      this.activeProductId = null;
    }
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

  editProduct(roleDetails: any) {
    this.router.navigate(['/admin-utility/role-management/create-roles'], {
      queryParams: {
        roleId: roleDetails.roleId,
      }
    });
  }

  copyProduct(roleDetails: any) {
    console.log('Copying roleDetails:', roleDetails);
    const copiedProduct = { ...roleDetails, id: this.roleDetails.length + 1 };
    this.roleDetails.push(copiedProduct);
  }

  showAuthDialog() {
    this.authDialog = true;
  }

  addRoleDialog() {
    this.router.navigate(['/admin-utility/role-management/create-roles']);
  }

  importRoleDialog() {
    this.router.navigate(['/admin-utility/role-management/import-role']);
  }

  // resetForm(roleForm: NgForm) {
  //   if (this.isEditMode) {
  //     roleForm.controls['description'].reset();
  //     roleForm.controls['active'].reset();
  //   } else {
  //     roleForm.reset();
  //   }
  // }
}
