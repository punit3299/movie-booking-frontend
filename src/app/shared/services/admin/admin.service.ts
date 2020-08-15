import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getTopThreeTheatres(){
    return this.http.get(this.url + "/topThreeTheatres");
  }

  getTopThreeMovies(){
    return this.http.get(this.url + "/topThreeMovies");
  }
}
