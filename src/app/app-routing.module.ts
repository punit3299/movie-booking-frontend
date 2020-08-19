import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { AdminStatsComponent } from './admin/admin-stats/admin-stats.component';
import { ScreenComponent } from './admin/screen/screen.component';
import { ViewCustomersComponent } from './admin/view-customers/view-customers.component';
import { AdminViewShowComponent } from './admin/admin-view-show/admin-view-show.component';
import { AdminAddShowComponent } from './admin/admin-add-show/admin-add-show.component';
import { AdminAddMovieComponent } from './admin/admin-add-movie/admin-add-movie.component';
import { ViewMovieComponent } from './admin/view-movie/view-movie.component';
import { AddMovieCanDeactivateGaurdServiceService } from './shared/services/add-movie-can-deactivate-gaurd-service.service';
import { AddShowCanDeactivateGuardService } from './shared/services/admin/add-show-can-deactivate-guard.service';
import { AdminBookingsComponent } from './admin/admin-bookings/admin-bookings.component';
import { AdminTheatreComponent } from './admin/admin-theatre/admin-theatre.component';
import { AdminCityComponent } from './admin/admin-city/admin-city.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewBookingsComponent } from './customer/view-bookings/view-bookings.component';
import { ViewShowsComponent } from './customer/view-shows/view-shows.component';


const routes: Routes = [
  { path: '', redirectTo: 'home/login', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },
    ]
  },

  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'stats', component: AdminStatsComponent },
      { path: 'screen/:theatreId', component: ScreenComponent },
      { path: 'viewCustomers', component: ViewCustomersComponent },
      { path: 'viewShows', component: AdminViewShowComponent },
      {
        path: 'addShow/:screenId/:theatreId', component: AdminAddShowComponent,
        canDeactivate: [AddShowCanDeactivateGuardService]
      },
      {
        path: 'addMovie', component: AdminAddMovieComponent,
        canDeactivate: [AddMovieCanDeactivateGaurdServiceService]
      },
      { path: 'viewMovies', component: ViewMovieComponent },
      { path: 'bookings', component: AdminBookingsComponent },
      { path: 'theatre', component: AdminTheatreComponent },
      { path: 'city', component: AdminCityComponent },
      { path: '**', component: AdminHomeComponent }
    ]
  },
  {
    path: 'customer', component: CustomerComponent,
    children: [
      { path: 'customer-home', component: CustomerHomeComponent },
      {path :'view-bookings',component:ViewBookingsComponent},
      {path :'view-shows',component:ViewShowsComponent},
      { path: '**', component: CustomerHomeComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
