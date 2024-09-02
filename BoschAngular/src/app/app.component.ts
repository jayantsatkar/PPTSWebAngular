import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'BoschAngular';
  items: MegaMenuItem[] | undefined;
  constructor(private router: Router) {}
  ngOnInit(): void {
    
  }

  redirectToComponent(){
    this.router.navigate(['']);
  }
}
