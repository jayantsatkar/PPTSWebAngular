import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WMYFilterComponent } from './wmyfilter.component';

describe('WMYFilterComponent', () => {
  let component: WMYFilterComponent;
  let fixture: ComponentFixture<WMYFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WMYFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WMYFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
