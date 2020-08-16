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

  getGenderwiseCount(){
    return this.http.get(this.url+"/genderwiseCount");
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
}
