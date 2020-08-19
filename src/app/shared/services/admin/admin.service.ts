import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../../models/customer.model';
import { Movie } from '../../models/movie.model';
import { Observable } from 'rxjs';
import { Show } from '../../models/show.model';

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

  addMovie(movie: Movie):Observable<any>
  {
    return this.http.post("http://localhost:8083/admin/movie",movie);
  }

  getAllMovies():Observable<any>
  {
    return this.http.get(this.url+"/movie/getAllMovies");
  }

  deleteMovie(movieId:number):Observable<any>
  {
    return this.http.delete(this.url+"/movie/"+movieId);
  }
  addShow(show:Show):Observable<any>
  {
    return this.http.post(this.url+"/theatre/screen/show",show);
  }

  findAllShows(theatreId:number):Observable<any>{
    return this.http.get(this.url+"/"+theatreId+"/screen/show");
  }

  deleteShow(showId:number):Observable<any>
  {
    return this.http.delete(this.url+"/theatre/screen/"+showId);
  }
}
