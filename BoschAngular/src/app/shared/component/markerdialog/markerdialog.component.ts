import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-markerdialog',
  templateUrl: './markerdialog.component.html',
  styleUrls: ['./markerdialog.component.scss'],
})
export class MarkerdialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MarkerdialogComponent>,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }
  openImageDialog(): void {
    this.dialog.open(ImageDialogComponent, {
      width: '100%',
      height: '600px',
      data: {
        imageUrl: this.data.imageUrl,
      },
    });
  }

  onRedirect(): void {
    const url = this.router.serializeUrl(this.router.createUrlTree(['/home/linedetails']));
    window.open(url, '_blank');
    //this.router.navigate(['/home/linedetails']); // Redirect to the destination page
  }
}
