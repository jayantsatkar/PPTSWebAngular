import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerdialogComponent } from './markerdialog.component';

describe('MarkerdialogComponent', () => {
  let component: MarkerdialogComponent;
  let fixture: ComponentFixture<MarkerdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkerdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
