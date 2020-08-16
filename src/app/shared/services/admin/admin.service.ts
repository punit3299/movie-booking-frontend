import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../../models/customer.model';
import { Booking } from '../../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url: string = "http://localhost:8083/admin";

  constructor(private http: HttpClient) { }


  getTodayRevenue() {
    return this.http.get(this.url + "/todayRevenue");
  }

  getTodayBookingCount() {
    return this.http.get(this.url + "/todayBookingCount");
  }

  getCountOfCustomers() {
    return this.http.get(this.url + "/countOfCustomers");
  }

  getCountOfTheatres() {
    return this.http.get(this.url + "/countOfTheatres");
  }

  getTopThreeTheatres() {
    return this.http.get(this.url + "/topThreeTheatres");
  }

  getTopThreeMovies() {
    return this.http.get(this.url + "/topThreeMovies");
  }

  getGenderwiseCount() {
    return this.http.get(this.url + "/genderwiseCount");
  }

  getGenrewiseMoviesCount() {
    return this.http.get(this.url + "/genrewiseMoviesCount")
  }

  getRecentRevenues() {
    return this.http.get(this.url + "/recentRevenues");
  }

  getRecentBookingsCount() {
    return this.http.get(this.url + "/recentBookingsCount");
  }
  getDetailsOfTheatre(theatreId:number)
  {
    return this.http.get(this.url+"/getTheatre/"+theatreId)
  }
  getScreenList(theatreId:number)
  {
    return this.http.get<Screen[]>(this.url+"/screen/"+theatreId);
  }
  updateNoOfSeats(screenId:number,noOfSeats:number)
  {
    return this.http.patch(this.url+"/seat",{"screenId":screenId,"noOfSeats":noOfSeats})
  }
  addScreen(screen:Screen,theatreId:number)
  {
    return this.http.post(this.url+"/screen/"+theatreId,screen);
  }
  deleteScreen(screenId:number,theatreId:number)
  {
    return this.http.delete(this.url+"/screen/"+theatreId+"/"+screenId)
  }
  getAllCustomers()
  {
    return this.http.get<Customer[]>(this.url+"/customers")
  }

  getAllBookings(){
    return this.http.get<Booking[]>(this.url+"/bookings");
  }

  getRecentThreeBookings(){
    return this.http.get<Booking[]>(this.url+"/recentThreeBookings");
  }

  deleteBookingById(bookingId){
    return this.http.delete(this.url+"/deleteBooking/"+bookingId);
  }
}
