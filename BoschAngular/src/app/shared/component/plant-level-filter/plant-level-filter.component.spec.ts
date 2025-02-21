import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantLevelFilterComponent } from './plant-level-filter.component';

describe('PlantLevelFilterComponent', () => {
  let component: PlantLevelFilterComponent;
  let fixture: ComponentFixture<PlantLevelFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantLevelFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantLevelFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
