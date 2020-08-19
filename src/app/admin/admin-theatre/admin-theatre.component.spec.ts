import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTheatreComponent } from './admin-theatre.component';

describe('AdminTheatreComponent', () => {
  let component: AdminTheatreComponent;
  let fixture: ComponentFixture<AdminTheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
