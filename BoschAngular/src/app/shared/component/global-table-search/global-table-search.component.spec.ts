import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTableSearchComponent } from './global-table-search.component';

describe('GlobalTableSearchComponent', () => {
  let component: GlobalTableSearchComponent;
  let fixture: ComponentFixture<GlobalTableSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalTableSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalTableSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
