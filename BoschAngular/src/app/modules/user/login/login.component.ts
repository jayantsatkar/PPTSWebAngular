import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { filter, Subject, takeUntil } from 'rxjs';
//import { ReactiveFormsModule } from '@angular/forms';
import {ConfigService } from '../../../../../src/app/shared/services/config.service';
import { EncryptionService } from '../../../../../src/app/shared/services/encryption.service';
import { Global } from '../../../../../src/app/shared/services/global';
import { HeirarchyNodeService } from '../../../../../src/app/shared/services/heirarchy-node.service';
import { JsonService } from '../../../../../src/app/shared/services/json.service';
import { ToastrMsgService } from '../../../../../src/app/shared/services/toastr.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword: boolean;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private configService: ConfigService,
    private toastrMsgService: ToastrMsgService,
    private encryptionService: EncryptionService,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private heirarchyNodeService: HeirarchyNodeService,
    private jsonService: JsonService,
  ) {
    this.showPassword = false;
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmitLogin() {
    // AES Mode - CBC 256
    const _loginId = this.loginForm.controls['userName'].value;
    // const _password = this.loginForm.controls['password'].value;
    
    // encrypted password
    //const _password = this.loginForm.controls['password'].value;

    const _password = this.encryptionService.encrypt(
      this.loginForm.controls['password'].value
    );

    if (!_loginId) {
      this.toastrMsgService.showError('LoginId is required.');
      return;
    }

    if (!_password) {
      this.toastrMsgService.showError('Password is required.');
      return;
    }

    const loginObj = {
      LoginId: _loginId,
      Password: _password,
    };

    this.configService.postRequest(Global['LOGIN'], loginObj).subscribe({
      next: (res: any) => {
        sessionStorage.setItem('token', JSON.stringify(res));
        sessionStorage.setItem('userFirstName', res.firstName);
        sessionStorage.setItem('userLastName', res.lastName);
        sessionStorage.setItem('roleId', res.roleId);
        sessionStorage.setItem('userId', res.userId);
        sessionStorage.setItem("loginProcess", "login");
        //this.router.navigate(['/home/plants']);//removed gmap route
        if (res.token == "") {
          this.toastrMsgService.showError('Username or password is invalid.');
        }
        else{
          this.router.navigate(['/admin-utility/admin-dashboard']);
        }
      },
    });
  }

  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();

  onSSOClick(){
    this.isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal
      this.setLoginDisplay();

      this.authService.instance.enableAccountStorageEvents(); // Optional - This will enable ACCOUNT_ADDED and ACCOUNT_REMOVED events emitted when a user logs in or out of another tab or window
      this.msalBroadcastService.msalSubject$
        .pipe(
          filter((msg: EventMessage) => msg.eventType === EventType.ACCOUNT_ADDED || msg.eventType === EventType.ACCOUNT_REMOVED),
        )
        .subscribe((result: EventMessage) => {
          if (this.authService.instance.getAllAccounts().length === 0) {
            window.location.pathname = "/";
          } else {
            this.setLoginDisplay();
          }
        });

      this.msalBroadcastService.inProgress$
        .pipe(
          filter((status: InteractionStatus) => status === InteractionStatus.None),
          takeUntil(this._destroying$)
        )
        .subscribe(() => {
          this.setLoginDisplay();
          this.checkAndSetActiveAccount();
        })

      setTimeout(() => {
        if (!this.loginDisplay) {
          console.log("Going to microsoft for auth");
          this.loginRedirect();
        }
      }, 1000);
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;

  }

  checkAndSetActiveAccount() {
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    let activeAccount = this.authService.instance.getActiveAccount();

    if (this.authService.instance.getAllAccounts().length > 0) {
      let accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
      console.log("login page activeAccount1");

      // set the token
      const token = {
        "loginId": "",
        "password": "",
        "firstName": accounts[0].name,
        "lastName": "",
        "userId": 2,
        "roleId": 1,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJyb2xlIjoiMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IlYzLjEiLCJuYmYiOjE3MjU5NzQxOTUsImV4cCI6MTcyNTk3Nzc5NSwiaWF0IjoxNzI1OTc0MTk1fQ.fdYH-2wEP2A6exKI8_l_Q5J3YjOo6J6Syf8qf3iKqKw"
      }

      sessionStorage.setItem("token", JSON.stringify(token));
      sessionStorage.setItem("userFirstName", accounts[0].name || "");
      sessionStorage.setItem("userEmail", accounts[0].username || "");
      sessionStorage.setItem('userLastName',"");
      sessionStorage.setItem("loginProcess", "SSO");
      this. loginRedirect();
    }
  }

  loginRedirect() {
    sessionStorage.setItem("loginProcess", "SSO");
    console.log("inside loginRedirect.........")
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest } as RedirectRequest);
    } else {
      this.authService.loginRedirect();
    }
  }

  loginPopup() {
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
        .subscribe((response: AuthenticationResult) => {
          this.authService.instance.setActiveAccount(response.account);
        });
    } else {
      this.authService.loginPopup()
        .subscribe((response: AuthenticationResult) => {
          this.authService.instance.setActiveAccount(response.account);
        });
    }
  }

  logout(popup?: boolean) {
    if (popup) {
      this.authService.logoutPopup({
        mainWindowRedirectUri: "/"
      });
    } else {
      this.authService.logoutRedirect();
    }
  }

}
