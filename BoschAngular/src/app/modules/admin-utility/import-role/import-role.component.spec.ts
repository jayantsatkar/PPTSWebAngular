import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportRoleComponent } from './import-role.component';

describe('ImportRoleComponent', () => {
  let component: ImportRoleComponent;
  let fixture: ComponentFixture<ImportRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
