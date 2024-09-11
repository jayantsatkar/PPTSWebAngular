import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfLifeReportComponent } from './shelf-life-report.component';

describe('ShelfLifeReportComponent', () => {
  let component: ShelfLifeReportComponent;
  let fixture: ComponentFixture<ShelfLifeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShelfLifeReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfLifeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
