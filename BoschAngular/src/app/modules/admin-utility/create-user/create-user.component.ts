import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;
  isEditMode = false;
  items: any[] | undefined;  // For breadcrumb
  home: any | undefined;  // For breadcrumb

  constructor(private fb: FormBuilder, private route: ActivatedRoute,     private router: Router  ) {
    this.userForm = this.fb.group({
      loginName: new FormControl('', [Validators.required]),
      rolename:[''],
      passward:[''],
      confirmPassward:[''],
      firstName: [''],
      middleName:[''],
      lastName: [''],
      emailAddress: ['', [Validators.required, Validators.email]],
      address:[''],
      city:[''],
      state:[''],
      country:[''],
      pinCode:[''],
      mobileNum: new FormControl ('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      employeeId:[''],
      isActive: [false]
    });
  }

  ngOnInit(): void {
    this.initializeForm();
    this.items = [
      { label: 'Admin Utility', url: '/admin-utility' },
      { label: 'Create User', url: '/create-user' }
    ];
    this.home = { icon: 'pi pi-home', url: '/' };

    // Check if the route contains query parameters
    this.route.queryParams.subscribe(params => {
      if (Object.keys(params).length > 0) {
        this.isEditMode = true;  // Set edit mode to true if data is present in query params
        this.userForm.patchValue({
          loginName: params['loginName'],
          rolename:params['rolename'],
          passward:params['passward'],
          confirmPassward:params['confirmPassward'],
          firstName: params['firstName'],
          middleName: params['middleName'],
          lastName: params['lastName'],
          emailAddress: params['emailAddress'],
          address:params['address'],
          city:params['city'],
          state:params['state'],
          country:params['country'],
          pinCode:params['city'],
          mobileNum: params['mobileNum'],
          employeeId:params['employeeId'],
          isActive: params['isActive'] || false  // Ensure isActive is false if not provided
        });
      }
    });
  }

  initializeForm(): void {
    
  }

  resetUserForm(): void {
    this.userForm.reset();
  }

  onCreateUserSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      // Your create or update logic here
    }
  }
  redirectback(): void {
    this.router.navigate(['/admin-utility/user-management']);
  }
}
