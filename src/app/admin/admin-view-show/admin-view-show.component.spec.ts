import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewShowComponent } from './admin-view-show.component';

describe('AdminViewShowComponent', () => {
  let component: AdminViewShowComponent;
  let fixture: ComponentFixture<AdminViewShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
