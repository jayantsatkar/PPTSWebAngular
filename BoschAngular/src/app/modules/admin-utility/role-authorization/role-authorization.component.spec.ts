import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAuthorizationComponent } from './role-authorization.component';

describe('RoleAuthorizationComponent', () => {
  let component: RoleAuthorizationComponent;
  let fixture: ComponentFixture<RoleAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleAuthorizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
