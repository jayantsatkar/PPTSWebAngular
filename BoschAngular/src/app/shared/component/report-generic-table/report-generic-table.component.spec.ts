import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGenericTableComponent } from './report-generic-table.component';

describe('ReportGenericTableComponent', () => {
  let component: ReportGenericTableComponent;
  let fixture: ComponentFixture<ReportGenericTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportGenericTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportGenericTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
