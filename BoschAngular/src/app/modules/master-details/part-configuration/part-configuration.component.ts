import { string } from '@amcharts/amcharts4/core';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-part-configuration',
  templateUrl: './part-configuration.component.html',
  styleUrls: ['./part-configuration.component.scss']
})
export class PartConfigurationComponent implements OnInit {

  // Breadcrumb Items
  items: MenuItem[];
  home: MenuItem;

  rowsPerPageOptions = [5, 10, 20];
  rows = 10;
  first = 0;
  //  totalRecords = this.details.length;

  details: {
    showActions: boolean;
    boschPartNo: string,
    customerPartNo: string,
    partDescription: string,
    customerName: string,
    customerCode: string,
    customerIndex: string,
    lineId: string,
    qtybox: string,
    lineNo: string

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
  router: any;

  toggleActions(product: any, rowIndex: number) {
    this.details.forEach(p => p.showActions = false);
    product.showActions = !product.showActions;
    this.activeDetailsId = product.showActions ? rowIndex : null;
  }
  isEditMode: boolean = true;

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }


  constructor() { }

  ngOnInit(): void {

    this.initializeMenu();
    this.details = [
      { boschPartNo: '0204.823.984', customerPartNo: '0607AABO1951N', partDescription: 'W201 SVM 10 Test', customerName: 'SCOOTERS INDIA', customerCode: '208201', customerIndex: '6YE', lineId: '10', qtybox: '18', lineNo: '10', showActions: true },
      { boschPartNo: '0204.328.006', customerPartNo: '269843000105', partDescription: '9" SVMASTER-207(SPACIO)', customerName: 'TATA MOTORS LIMITED', customerCode: '208210', customerIndex: '5TE', lineId: ' ', qtybox: '3', lineNo: '', showActions: true },
      { boschPartNo: '0204.812.022', customerPartNo: '51910M76M00', partDescription: 'TDPV(15)', customerName: 'Maruti Suzuki India Ltd, Gurgaon', customerCode: '208302', customerIndex: '5TD', lineId: ' ', qtybox: '50', lineNo: '', showActions: true },
      { boschPartNo: '0204.817.289', customerPartNo: '472102209R', partDescription: 'XBAA-ENTRYBOOSTERASSLY', customerName: 'RENAULT NISSAN AUTOMOTIVE INDIA PVT.LTD.', customerCode: '208666', customerIndex: '6YE', lineId: ' ', qtybox: '60', lineNo: '', showActions: true },
      { boschPartNo: '0204.835.040', customerPartNo: '0607AABO1971N', partDescription: 'W201AMTBOOSTER', customerName: 'MAHINDRA VEHICLE MANUFACTURERS LTD', customerCode: '208465', customerIndex: '5TG', lineId: ' ', qtybox: '18', lineNo: '', showActions: true },
    ];
  }
  private initializeMenu(): void {
    this.items = [{ label: 'Part Details' }];
    this.home = { label: 'Master', routerLink: '' };
  }

  // Form Submission
  onRoleAuthSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted:', this.formData);
      this.resetForm(form);
    }
  }
  resetForm(form: any): void {
    form.resetForm();
    this.formData = {
      name: '',
      module: '',
      form: '',
    };
  }

  showActionMenu(event: any, roleDetails: any) {
    this.selectedProduct = roleDetails;
    this.actionItems = [
      { label: 'Edit', icon: 'fa fa-edit', command: () => this.editPartDetails() },


    ];
  }

    partconfigurationcomponent() {
      this.router.navigate(['/master/create-customer'])


    }



    editPartDetails(): void {
      throw new Error('Method not implemented.')
    }
}