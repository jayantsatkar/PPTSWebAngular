import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMatrixComponent } from './plant-matrix.component';

describe('PlantMatrixComponent', () => {
  let component: PlantMatrixComponent;
  let fixture: ComponentFixture<PlantMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantMatrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
