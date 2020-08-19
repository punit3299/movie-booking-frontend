import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AdminAddMovieComponent } from 'src/app/admin/admin-add-movie/admin-add-movie.component';

@Injectable({
  providedIn: 'root'
})
export class AddMovieCanDeactivateGaurdServiceService implements CanDeactivate<AdminAddMovieComponent>{
  canDeactivate(component: AdminAddMovieComponent): boolean {
    if(component.addMovieForm.dirty)
    {
      return confirm("Are you sure you want to leave this page?");
    }
    return true;
  }

  constructor() { }
}
