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
import { AdminBookingsComponent } from './admin/admin-bookings/admin-bookings.component';
import { SearchBookingPipe } from './shared/pipe/search-booking.pipe';
import { AdminTheatreComponent } from './admin/admin-theatre/admin-theatre.component'
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
    AdminBookingsComponent,
    SearchBookingPipe,
    AdminTheatreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
