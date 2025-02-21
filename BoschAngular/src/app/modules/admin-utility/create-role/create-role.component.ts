import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms'; // Import Reactive Form classes
//import { ConfigService } from '../../src/app/shared/services/config.service';
import { ConfigService } from '../../../shared/services/config.service'
import { Global } from '../../../shared/services/global';
import { ToastrMsgService } from '../../../shared/services/toastr.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  roleForm: FormGroup;
  isEditMode: boolean = false;
  isDuplicate: any;
  initialRoleData: any;
  editroleData: any;
  updatedroleData :any;
  payload: any;
  @Input() roleId!: number;
  idparam:any;

  constructor(
    private toastrMsgService: ToastrMsgService,
    private configService: ConfigService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute 
  ) {
    this.roleForm = this.fb.group({
      rolename: ['', [Validators.required]],
      roleCode: ['', [Validators.required]],
      description: ['', [Validators.required]],
      isActive: [false]
    });
   }

  ngOnInit(): void {
    this.initializeMenu();
    this.initializeForm();
    this.checkForEditMode();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['roleId'] &&
      changes['roleId'].currentValue
    ) {
      this.loadDetails();
      this.resetRoleForm();
    }
  }

  loadDetails(): void {
    this.checkForEditMode();
  }

  private initializeMenu(): void {
    this.items = [
      { label: 'Role Management', routerLink: '/admin-utility/role-management' },
      { label: 'Create Role' }
    ];
    this.home = { label: 'Admin Utility', routerLink: '/' };
  }

  private initializeForm(): void {
    
  }

  // Check for duplicate role name
  checkDuplicateRole(): void {
    const payload = {
      id: 0,
      fieldName: "Role",
      fieldValue: this.roleForm.value.rolename,
      typeValue: 0,
      makeId: 0,
      modelId: 0
    };

    this.configService.postRequest(Global['CHECK_DUPLICATE'], payload).subscribe({
      next: (response) => {
        this.isDuplicate = response;
        // if (this.isDuplicate) {
        //   this.toastrMsgService.showError("Role already exists. Please choose a different name.");
        // }
      },
      // error: (error) => {
      //   this.toastrMsgService.showError("Failed to check for duplicate data.");
      // }
    });
  }

  onCreateRoleSubmit(roleForm: any): void {
    this.route.queryParams.subscribe(params => {
    if (this.roleForm.valid && !this.isDuplicate) {
      const payload = {
        rolename: this.roleForm.value.rolename,
        roleCode: this.roleForm.value.roleCode,
        roleDesc: this.roleForm.value.description,
        isActive: this.roleForm.value.isActive
      };

      const endPoint=(Global['UPDATE_ROLES']);
       const uri = `${endPoint}${ this.idparam}`;
      this.configService.putRequest(`${uri}`, payload).subscribe({
        next: (response) => {
          this.resetRoleForm();
          this.toastrMsgService.showSuccess("Role has been created successfully");
          setTimeout(() => {
            this.router.navigate(['/admin-utility/role-management']);
          }, 500);
        },
        error: (error) => {
          this.toastrMsgService.showError("Error creating role");
        }
      });
    } else {
      console.log('Form is invalid or role is duplicate');
    }
  })
 }
  checkForEditMode(): void {
    this.route.queryParams.subscribe(params => {
      this.idparam=params['roleId']
      // // Check if the required query parameters exist
       if (params['roleId']) {
        // Set Edit Mode to true
        this.isEditMode = true;
      const endPoint=(Global['GETROLEID']);
       const uri = `${endPoint}${params['roleId']}`;
      this.configService
        .getRequest(
          `${uri}`
        )
        .subscribe({
          next: (res: any) => {
            this.initialRoleData  = res;
             this.initialRoleData = { rolename: this.initialRoleData.roleName,
                roleCode: this.initialRoleData.roleCode,
                description: this.initialRoleData.roleDesc,
                isActive: this.initialRoleData.isActive,
          }
           this.resetRoleForm();
          },
          error: (err: any) => {
            this.isEditMode = false;
            console.error('Error fetching Work Order Details:', err);
            
          },
    });
   }
  });
} 

  resetRoleForm(): void {
    console.log(this.isEditMode)
    if (this.isEditMode && this.initialRoleData) {
      this.roleForm.patchValue({
        rolename: this.initialRoleData.rolename,
        roleCode: this.initialRoleData.roleCode,
        description: this.initialRoleData.description,
        isActive: this.initialRoleData.isActive
      });

      console.log('Form after patchValue:', this.roleForm.value);
    } else {
      this.roleForm.reset({
        rolename: '',
        roleCode: '',
        description: '',
        isActive: false
      });
    }
  }
  

  redirectback(): void {
    this.router.navigate(['/admin-utility/role-management']);
  }
}
