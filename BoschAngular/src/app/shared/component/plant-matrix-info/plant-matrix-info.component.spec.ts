import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMatrixInfoComponent } from './plant-matrix-info.component';

describe('PlantMatrixInfoComponent', () => {
  let component: PlantMatrixInfoComponent;
  let fixture: ComponentFixture<PlantMatrixInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantMatrixInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantMatrixInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
