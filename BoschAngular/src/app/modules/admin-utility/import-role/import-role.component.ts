import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ToastrMsgService } from '../../../shared/services/toastr.service';


@Component({
  selector: 'app-import-role',
  templateUrl: './import-role.component.html',
  styleUrls: ['./import-role.component.scss']
})
export class ImportRoleComponent implements OnInit {

  constructor(
    private toastrMsgService: ToastrMsgService,
    private router: Router,
  ) { }

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;;

  isFileValid: boolean = true;

  ngOnInit(): void {
    this.initializeMenu();
  }

  private initializeMenu(): void {
    this.items = [
      { label: 'Role Management', routerLink: '/admin-utility/role-management' },
      { label: 'Import Role' }
    ];
    this.home = { label: 'Admin Utility', routerLink: '/' };
  }

  onRoleImportSubmit(form: any) {
    if (!this.isFileValid) {
      this.toastrMsgService.showError('Please select a valid CSV file before submitting.');
      return;
    }
    console.log('Form submitted:', form);
  }

  clearFile() {
    const fileInput: any = document.getElementById('csvUpload');
    fileInput.value = '';
    this.isFileValid = true;
    console.log('File input cleared');
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

  redirectback(){
    this.router.navigate(['/admin-utility/role-management']);
  }
}
