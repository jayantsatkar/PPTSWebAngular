import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrowdownComponent } from './drowdown.component';

describe('DrowdownComponent', () => {
  let component: DrowdownComponent;
  let fixture: ComponentFixture<DrowdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrowdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrowdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
