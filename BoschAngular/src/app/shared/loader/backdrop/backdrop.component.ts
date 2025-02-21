import { Component, OnInit } from '@angular/core';
import { backdropService } from '../../services/backdrop.service';


@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private backdropService: backdropService) {}

  ngOnInit(): void {
    this.backdropService.loading$.subscribe((v: boolean) => { // Ensure 'v' is of type boolean
      // console.log('Loader state changed:', v);
      this.isLoading = v;
    });
  }
}
