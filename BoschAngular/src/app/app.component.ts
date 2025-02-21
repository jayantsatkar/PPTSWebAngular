import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { HeirarchyNodeService } from './shared/services/heirarchy-node.service';
import { JsonService } from './shared/services/json.service';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { ConfigService } from './shared/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'factory-magix';
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();

  constructor(@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private heirarchyNodeService: HeirarchyNodeService,
    private jsonService: JsonService,
    private configService: ConfigService,
  ) {
    //this.heirarchyNodeService.getHierarchyNode();
    
  }
  ngOnInit(): void {
        
      if (this.authService.instance.getAllAccounts().length >0) {
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
                  this.loginRedirect();
        }
      }, 1000);
    }
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

    if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {

      let accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);

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
      this.loginRedirect();
    }
  }

  loginRedirect() {
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

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
