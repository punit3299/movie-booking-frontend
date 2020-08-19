import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TopNavbarComponent } from './shared/navbars/top-navbar/top-navbar.component';
import { BottomNavbarComponent } from './shared/navbars/bottom-navbar/bottom-navbar.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { HttpClientModule} from '@angular/common/http';
import { AdminStatsComponent } from './admin/admin-stats/admin-stats.component';
import { ScreenComponent } from './admin/screen/screen.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewCustomersComponent } from './admin/view-customers/view-customers.component';
import { SearchCustomerPipe } from './shared/pipe/search-customer.pipe';
import { AdminAddMovieComponent } from './admin/admin-add-movie/admin-add-movie.component';
import { ViewMovieComponent } from './admin/view-movie/view-movie.component';
import { AdminAddShowComponent } from './admin/admin-add-show/admin-add-show.component';
import { AdminViewShowComponent } from './admin/admin-view-show/admin-view-show.component';
import { MovieSearchPipe } from './shared/pipe/movie-search.pipe';
import { AddMovieCanDeactivateGaurdServiceService } from './shared/services/add-movie-can-deactivate-gaurd-service.service';
import { AddShowCanDeactivateGuardService } from './shared/services/admin/add-show-can-deactivate-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminBookingsComponent } from './admin/admin-bookings/admin-bookings.component';
import { SearchBookingPipe } from './shared/pipe/search-booking.pipe';
import { AdminTheatreComponent } from './admin/admin-theatre/admin-theatre.component';
import { AdminCityComponent } from './admin/admin-city/admin-city.component';
import { BookSeatComponent } from './customer/book-seat/book-seat.component';
import { BookedDetailsComponent } from './customer/booked-details/booked-details.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    TopNavbarComponent,
    BottomNavbarComponent,
    CustomerComponent,
    AdminComponent,
    CustomerHomeComponent,
    AdminHomeComponent,
    HomeComponent,
    AdminStatsComponent,
    ScreenComponent,
    ViewCustomersComponent,
    SearchCustomerPipe,
    AdminAddMovieComponent,
    ViewMovieComponent,
    AdminAddShowComponent,
    AdminViewShowComponent,
    MovieSearchPipe,
    AdminBookingsComponent,
    SearchBookingPipe,
    AdminTheatreComponent,
    AdminCityComponent,
    BookSeatComponent,
    BookedDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
    {
      timeOut:10000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    })

  ],
  providers: [AddMovieCanDeactivateGaurdServiceService,
  AddShowCanDeactivateGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
