import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodataFoundComponent } from './nodata-found.component';

describe('NodataFoundComponent', () => {
  let component: NodataFoundComponent;
  let fixture: ComponentFixture<NodataFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodataFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodataFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
