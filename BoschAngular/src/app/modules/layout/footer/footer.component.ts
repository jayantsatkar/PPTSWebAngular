import { Component, OnInit } from '@angular/core';
//import { NavbarToggleService } from '/src/app/shared/services/navbar-toggle.service';
import { NavbarToggleService } from '../../../../../src/app/shared/services/navbar-toggle.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isCollapse: boolean = true;
  constructor(private toggleSidebarSer: NavbarToggleService) { }

  ngOnInit(): void {
    
    this.toggleSidebarSer.toggleSidebarSub.subscribe((res: any) => {
        this.isCollapse = res;
    });
  }

}
