import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  // Breadcrumb Items
  // items: MenuItem[];
  // home: MenuItem;

  rowsPerPageOptions = [5, 10, 20];
  rows = 10;
  first = 0;
  //  totalRecords = this.details.length;

  details: {
    customerCode: string,
    customerName: string,
    customerIndex: string,
    addressLine1: string,
    addressLine2: string,
    showActions: boolean

  }[] = [];

  // Action dialog
  actionItems: MenuItem[] = [];
  selectedDetails: any;
  activeDetailsId: number | null = null;

  // Dialog Visibility
  authDialog = false;

  // Form Models
  formData = {
    name: '',
    module: '',
    form: '',
  };
  selectedProduct: any;

  toggleActions(product: any, rowIndex: number) {
    this.details.forEach(p => p.showActions = false);
    product.showActions = !product.showActions;
    this.activeDetailsId = product.showActions ? rowIndex : null;
  }
  isEditMode: boolean = true;

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initializeMenu();
    this.details = [
      { customerCode: '208572', customerName: 'ATUL AUTO LTD', customerIndex: '6YE', addressLine1: '8-B,NATIONAL HIGHWAY,124', addressLine2: 'RAJKOT,360002,123', showActions: true },
      { customerCode: '208414', customerName: 'BAJAJ AUTO LTD', customerIndex: '6YE', addressLine1: 'BAJAJ NAGAR,WALUJ', addressLine2: 'AURANGABAD,431133', showActions: true },
      { customerCode: '208531', customerName: 'Bosch Chassis system india P.ltd.', customerIndex: '5w9', addressLine1: 'Sanand ahmedabad', addressLine2: 'GUJRAT', showActions: true },
      { customerCode: '208521', customerName: 'Bosch Chassis system india Manesar', customerIndex: '5W9', addressLine1: 'PLOT NO.308A,SECTOR6', addressLine2: 'MANESAR,122050', showActions: true },
      { customerCode: '208463', customerName: 'CONTINENTAL ENGINES LTD', customerIndex: '6YE', addressLine1: 'KIE INDL EST,MILESTONE-158,MUNDIYAKI VILLAGE', addressLine2: 'ROORKEE,249406', showActions: true },
    ];

    // this.totalRecords = this.details.length;
  }
  // Initialize Breadcrumbs
  private initializeMenu(): void {
    // this.items = [{ label: 'Customer Details' }];
    // this.home = { label: 'Master', routerLink: '' };
  }




  // Form Submission
  onRoleAuthSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted:', this.formData);
      this.resetForm(form);
    }
  }

  showActionMenu(event: any, roleDetails: any) {
    this.selectedProduct = roleDetails;
    this.actionItems = [
      { label: 'Edit', icon: 'fa fa-edit', command: () => this.editCustomerDetails() },


    ];

    event.preventDefault();
    const menu = event.target.nextElementSibling;
    menu.show(event);
  }
  

  resetForm(form: any): void {
    form.resetForm();
    this.formData = {
      name: '',
      module: '',
      form: '',
    };
  }

  

  createcustomercomponent() {
    this.router.navigate(['/master/create-customer'])


  }

  // // Table Actions
  // editProduct(product: any): void {
  //   console.log('Edit Product:', product);
  //   // Implement your edit logic here
  // }

  // configFingerPrintProduct(product: any): void {
  //   console.log('ConfigFingerPrintProduct:', product);
  //   // Implement your delete logic here
  // }

  // onTextChangedEvent(event: any) {
  //   console.log("search called")
  // }

  // handleGlobalTableSearch(event: any) {
  //   // Handle the search event here
  //   console.log(event);
  // }

  editCustomerDetails() {
    this.router.navigate(['/master/create-customer'])

  };

}
  


