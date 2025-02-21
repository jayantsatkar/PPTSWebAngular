import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  // Breadcrumb Items
  createCustomer: FormGroup;
  // items: MenuItem[];
  // home: MenuItem;
  displayDialog: any;
  authDialog: any;
  configService: any;
  importRole: boolean = false;
  isFileValid: boolean = true;
  isEditMode: boolean = false;
  customer: any;

  rowsPerPageOptions = [5, 10, 20];
   rows = 10;
   first = 0;
  //  totalRecords = this.details.length;

  //  details: {
  //    customerCode: string,
  //    customerName: string,
  //    customerIndex: string,
  //    addressLine1: string,
  //    addressLine2: string,
  //    showActions: boolean
  //  }
   
  //master: { label: string; routerLink: string; };
  

  constructor( private fb: FormBuilder, private router: Router) { 
    this.createCustomer = this.fb.group({
      customerCode: ['', [Validators.required]],
      customerName: ['', [Validators.required]],
      customerIndex: ['', [Validators.required]],
      addressLine1: [''],
      addressLine2: ['']
    });
  }

  ngOnInit(): void {
    this.initializeMenu();
    this.initializeForm();
    
    // this.details = [
    //   { customerCode:'208572', customerName: 'ATUL AUTO LTD', customerIndex: '6YE', addressLine1: '8-B,NATIONAL HIGHWAY,124', addressLine2: 'RAJKOT,360002,123',showActions: true},
    //   { customerCode:'208414', customerName: 'BAJAJ AUTO LTD', customerIndex: '6YE', addressLine1: 'BAJAJ NAGAR,WALUJ', addressLine2: 'AURANGABAD,431133',showActions: true},
    //   { customerCode:'208531', customerName: 'Bosch Chassis system india P.ltd.', customerIndex: '5w9', addressLine1: 'Sanand ahmedabad', addressLine2: 'GUJRAT',showActions: true},
    //   { customerCode:'208521',  customerName: 'Bosch Chassis system india Manesar', customerIndex: '5W9', addressLine1: 'PLOT NO.308A,SECTOR6', addressLine2: 'MANESAR,122050',showActions: true},
    //   { customerCode:'208463', customerName: 'CONTINENTAL ENGINES LTD', customerIndex: '6YE', addressLine1: 'KIE INDL EST,MILESTONE-158,MUNDIYAKI VILLAGE', addressLine2: 'ROORKEE,249406',showActions: true},
    // ];
  }
  
  private initializeMenu(): void {
    // this.items = [
    //   { label: 'Customer Details', routerLink: '/master/customer' },
    //   { label: 'Create Customer' }
    // ];
    // this.home = { label: 'Master', routerLink: '/' };
  }

  editProduct(product: any): void {
    console.log('Edit Product:', product);
    // Implement your edit logic here
  }

  // resetForm(form: any): void {
  //   form.resetForm();
  //   this.formData = {
  //     name: '',
  //     module: '',
  //     form: '',
  //   };
  // }

  // createcustomercomponent(){
  //   this.route.navigate(['/master/create-customer'])
  // }

  private initializeForm(): void {
    
  }

  onSubmit(): void {
    if (this.createCustomer.valid) {
      console.log('Form Data:', this.createCustomer.value);
      // Handle form submission logic here
    } else {
      console.log('Form is invalid');
      this.createCustomer.markAllAsTouched(); // Mark all fields to show validation errors
    }
  }

  resetForm(): void {
    this.createCustomer.reset({
      customerCode: '',
      customerName: '',
      customerIndex: '',
      addressLine1: '',
      addressLine2: ''
    });
  }

  redirectBack(){
    this.router.navigate(['/master/customer'])
  }
}

