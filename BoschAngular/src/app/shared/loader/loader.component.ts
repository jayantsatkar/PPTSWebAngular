import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.loading$.subscribe((v: boolean) => { // Ensure 'v' is of type boolean
      // console.log('Loader state changed:', v);
      this.isLoading = v;
    });
  }
}
