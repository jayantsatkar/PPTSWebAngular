import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ConfigService } from '../../../../../src/app/shared/services/config.service';
import { NavbarToggleService } from '../../../../../src/app/shared/services/navbar-toggle.service';
import { ToastrMsgService } from '../../../../../src/app/shared/services/toastr.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../../../src/app/shared/services/language.service';
import { Global } from '../../../../../src/app/shared/services/global';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class NavSidebarComponent implements OnInit, AfterViewInit {
  currentRoute: string;
  masterDataBgChange: boolean;
  isHidden: boolean = true;
  openMenus: Set<string> = new Set();

  openMenu: string | null = null;
  openSubMenu: string | null = null;
  obj: {
    UserId: number,
    RoleId: number
  };
  authRes: any[] = [];
  AssetMonitoringDashboardLineView: boolean = false;
  AssetMonitoringDashboard: boolean = false;
  MeanTimeBetweenFailure: boolean = false;
  MeanTimetoRepair: boolean = false;
  MeanTimeAcknowledgement: boolean = false;
  SparePartConsumption: boolean = false;
  MaintenanceWorkOrderCompletion: boolean = false;
  AssetCalibrationSchedule: boolean = false;
  PreventiveMaintenanceSchedule: boolean = false;
  MaintenanceStatusReport: boolean = false;


 
  OAEDashboards: boolean = false;
  OAEPlantLevelReport: boolean = false;
  OAEShiftLevelReport: boolean = false;


  constructor(
    private router: Router,
    private toastrMsgService: ToastrMsgService,
    private navbarToggleService: NavbarToggleService,
    private translate: TranslateService,
    private languageService: LanguageService,
    private configService: ConfigService
  ) {
    this.translate.setDefaultLang('en');
    this.currentRoute = '';
    this.masterDataBgChange = false;
    this.obj = {
      UserId: 0,  // Initialize with default values
      RoleId: 0
    }
  }

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  ngOnInit(): void {
    this._onSubcription();

    

    this.obj.RoleId = Number(sessionStorage.getItem('roleId')) || 0;
    this.obj.UserId = Number(sessionStorage.getItem('userId')) || 0;

    this.configService.postRequest(Global['RoleBasedAUth'], this.obj).subscribe({
      next: (res: any) => {
        this.authRes = res;
        sessionStorage.setItem('roleAuth', JSON.stringify(res));
        this.authRes.forEach(screen => {
          switch (String(screen.screenname).toLowerCase()) {
            case 'Asset Monitoring Dashboard - Line View'.toLowerCase():
              this.AssetMonitoringDashboardLineView = screen.isvisible;
              break;
            case 'Asset Monitoring Dashboard'.toLowerCase():
              this.AssetMonitoringDashboard = screen.isvisible;
              break;
            case 'Mean Time Between Failure'.toLowerCase():
              this.MeanTimeBetweenFailure = screen.isvisible;
              break;
            case 'Mean Time to Repair'.toLowerCase():
              this.MeanTimetoRepair = screen.isvisible;
              break;
            case 'Mean Time Acknowledgement'.toLowerCase():
              this.MeanTimeAcknowledgement = screen.isvisible;
              break;
            case 'Spare Part Consumption'.toLowerCase():
              this.SparePartConsumption = screen.isvisible;
              break;
            case 'Maintenance Work Order Completion'.toLowerCase():
              this.MaintenanceWorkOrderCompletion = screen.isvisible;
              break;
            case 'Asset Calibration Schedule'.toLowerCase():
              this.AssetCalibrationSchedule = screen.isvisible;
              break;
            case 'Preventive Maintenance Schedule'.toLowerCase():
              this.PreventiveMaintenanceSchedule = screen.isvisible;
              break;
            case 'Maintenance Status Report'.toLowerCase():
              this.MaintenanceStatusReport = screen.isvisible;
              break;
            case 'OAE Dashboard'.toLowerCase():
              this.OAEDashboards = screen.isvisible;
              break;
            case 'Plant Level OAE Report'.toLowerCase():
              this.OAEPlantLevelReport = screen.isvisible;
              break;
            case 'Shift Level OAE Report'.toLowerCase():
              this.OAEShiftLevelReport = screen.isvisible;
              break;
          }
        });
      },
    });

  };

  ngAfterViewInit(): void {
    this.accessRoute();
  }

  private _onSubcription() {
    setTimeout(() => {
      this.languageService.onLanguageChange$.subscribe({
        next: (res: any) => {
          this.translate.use(res);
        },
      });
    }, 1000);
  }
  // logOut() {
  //   this.toastrMsgService.showWarning('Logout successfully');
  //   this.router.navigate(['user/login']);
  //   sessionStorage.removeItem('tokenKey');
  // }

  logOut() {
    this.LOGOUT2();
    setTimeout(() => {
      this.router.navigateByUrl('user/login');
    }, 100);
    this.LOGOUT2();
  }
  private isLogoutMessageShown = false;

  closeNav($event: any) {
    this.navbarToggleService.isToggled(false);
  }

  // Toggles a top-level menu
  toggleMenu(menuId: string): void {
    if (this.openMenu === menuId) {
      // If the same menu is clicked again, keep it open
      return;
    }

    // Open the clicked menu and close any previously open menu
    this.openMenu = menuId;
    this.openSubMenu = null; // Optionally close sub-menu when changing top-level menu
  }

  // Toggles a sub-menu
  toggleSubMenu(subMenuId: string): void {
    if (this.openSubMenu === subMenuId) {
      // If the same sub-menu is clicked again, keep it open
      return;
    }

    // Open the clicked sub-menu and ensure the top-level menu is open
    this.openSubMenu = subMenuId;
    // this.openMenu = 'assetMonitoring'; // Ensure 'assetMonitoring' is open if a sub-menu is opened
    // if(subMenuId == 'oaereport')
    // {

    // }
  }

  // Determines if a top-level menu is open
  isMenuOpen(menuId: string): boolean {
    return this.openMenu === menuId;
  }

  // Determines if a sub-menu is open
  isSubMenuOpen(subMenuId: string): boolean {
    return this.openSubMenu === subMenuId;
  }

  LOGOUT2() {
    sessionStorage.clear(); // Clear all session data
    // sessionStorage.removeItem('tokenKey');
    // sessionStorage.setItem('userName', '');
    // sessionStorage.setItem('userFirstName', '');
    if (!this.isLogoutMessageShown) {
      //this.toastrMsgService.showWarning('Logged out successfully');
      this.isLogoutMessageShown = true;
    }
    this.router.navigate(['user/login']);
  }
  accessRoute() {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = (event as NavigationEnd).url; // Cast to NavigationEnd
        const isTrue = this.currentRoute.indexOf('/master-data');

        if (isTrue != -1) {
          this.masterDataBgChange = true;
        } else {
          this.masterDataBgChange = false;
        }
      });
  }
}
