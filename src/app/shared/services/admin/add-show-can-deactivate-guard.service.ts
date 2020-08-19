import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AdminAddShowComponent } from 'src/app/admin/admin-add-show/admin-add-show.component';

@Injectable({
  providedIn: 'root'
})
export class AddShowCanDeactivateGuardService implements CanDeactivate<AdminAddShowComponent> {

  canDeactivate(component: AdminAddShowComponent): boolean {
    if(component.addShowForm.dirty)
    {
      return confirm("Are you sure you want to leave this page?");
    }
    return true;
  }


  constructor() { }
}
