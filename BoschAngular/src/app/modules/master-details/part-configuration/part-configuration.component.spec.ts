import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartConfigurationComponent } from './part-configuration.component';

describe('PartConfigurationComponent', () => {
  let component: PartConfigurationComponent;
  let fixture: ComponentFixture<PartConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
