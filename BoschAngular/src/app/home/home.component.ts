import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';
import { Global } from '../shared/services/global';
import { ConfigService } from '../shared/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginDisplay = false;

  constructor(private authService: MsalService, private msalBroadcastService: MsalBroadcastService, private router: Router,
    private configService: ConfigService) { }

  ngOnInit(): void {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      )
      .subscribe((result: EventMessage) => {
        const payload = result.payload as AuthenticationResult;
        this.authService.instance.setActiveAccount(payload.account);

        // set the token
        const token = {
          "loginId": null,
          "password": null,
          "firstName": payload.account?.name,
          "lastName": "",
          "userId": 1,
          "roleId": 1,
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJyb2xlIjoiMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IlYzLjEiLCJuYmYiOjE3MjYwNjUzMjEsImV4cCI6MTcyNjE1MTcyMSwiaWF0IjoxNzI2MDY1MzIxfQ.yF38vZSXxL7WwpTuT3Pznty6h5L7xvbwuHkMFwpSkeU"
        }

        sessionStorage.setItem("token", JSON.stringify(token));
      });


    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;

        // redirect to plant map
        if (this.loginDisplay) {
          let accounts = this.authService.instance.getAllAccounts();
          this.authService.instance.setActiveAccount(accounts[0]);


          // set the token
          const token = {
            "loginId": null,
            "password": null,
            "firstName": accounts[0].name,
            "lastName": "",
            "userId": 1,
            "roleId": 1,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJyb2xlIjoiMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IlYzLjEiLCJuYmYiOjE3MjYwNjUzMjEsImV4cCI6MTcyNjE1MTcyMSwiaWF0IjoxNzI2MDY1MzIxfQ.yF38vZSXxL7WwpTuT3Pznty6h5L7xvbwuHkMFwpSkeU"
          }

          sessionStorage.setItem("token", JSON.stringify(token));
          sessionStorage.setItem("userFirstName", accounts[0].name || "");
          sessionStorage.setItem("userEmail", accounts[0].username || "");

        }
        this.setLoginDisplay();

      })

  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;

    // redirect to plant map
    if (this.loginDisplay) {
  
      // this.router.navigate(["/plants"]);
      // this.router.navigate(["/main-dashboard"]);
      var userEmail = sessionStorage.getItem('userEmail');
      this.configService.postRequest(Global['GetUserDataFromEmail'], { userEmail: userEmail }).subscribe({
        next: (res: any) => {
          
          sessionStorage.setItem('emailbasedRole', JSON.stringify(res));
          sessionStorage.setItem('roleId', res.length == 0 ? 0 : res[0].roleId);
          sessionStorage.setItem('userId', res.length == 0 ? 0 : res[0].userId);

          this.router.navigate(['/asset-management/plantlevellineasset']);
        }
      });
    } else {
     
      this.router.navigateByUrl('user/login');
    }
  }

}
