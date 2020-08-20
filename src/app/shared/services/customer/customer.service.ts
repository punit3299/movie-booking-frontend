import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../../models/ticket.model';
import { Transaction } from '../../models/transaction.model';
import { Customer } from '../../models/customer.model';
import { Observable } from 'rxjs';
import { Show } from '../../models/show.model';
import { Bookings } from '../../models/bookings.model';
import { Shows } from '../../models/shows.model';
import { BookedDetailsOfTicket } from '../../models/booked-details-of-ticket.model';

import { Booking } from '../../models/booking.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer:Customer;
  ticketDetail: BookedDetailsOfTicket;


  url: string = "http://localhost:8083/customer";
  constructor(private http:HttpClient) { }

  addCustomer(customer:any){
    return this.http.post<Customer>(this.url+"/addCustomer",customer);
  }

  getCustomer(email:String){
    return this.http.get<Customer>(this.url+"/getCustomer/"+email);
  }

  cancelTicket(customerId:number,ticket:any){
    return this.http.put<Ticket>(this.url+"/cancelTicket/"+customerId,ticket);
  }

  getAllTransactions(customerId:number){
    return this.http.get<Transaction[]>(this.url+"/getAllTransactions/"+customerId);
  }

  addMoneyToWallet(amount:number,customer:Customer){
    return this.http.put<Customer>(this.url+"/addMoney/"+amount,customer);
  }


  getAllShows():Observable<Shows[]>
  {
return this.http.get<Shows[]>(this.url+"/show/all");
  }
  getShowsByCityId(cityId:any):Observable<Show[]>
  {
    return this.http.get<Show[]>(this.url+"/show/all/cityId");
  }

  getPreviousBookings(customerId:number):Observable<Bookings[]>
  {
    return this.http.get<Bookings[]>(this.url+"/booking/all/"+customerId);
  }

  getBooking(bookingId:number){
    return this.http.get<Booking>(this.url+"/booking/"+bookingId);
  }


}
