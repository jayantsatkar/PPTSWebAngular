import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatChipFilterComponent } from './mat-chip-filter.component';

describe('MatChipFilterComponent', () => {
  let component: MatChipFilterComponent;
  let fixture: ComponentFixture<MatChipFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatChipFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatChipFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
