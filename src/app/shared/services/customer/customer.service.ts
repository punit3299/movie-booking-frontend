import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../../models/ticket.model';
import { Transaction } from '../../models/transaction.model';
import { Customer } from '../../models/customer.model';
import { Observable } from 'rxjs';
import { Booking } from '../../models/booking.model';
import { Show } from '../../models/show.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = "http://localhost:8084/customer";
  constructor(private http:HttpClient) { }

  cancelTicket(customerId:number,ticket:any){
    return this.http.put<Ticket>(this.url+"/cancelTicket/"+customerId,ticket);
  }

  getAllTransactions(customerId:number){
    return this.http.get<Transaction[]>(this.url+"/getAllTransactions/"+customerId);
  }

  addMoneyToWallet(amount:number,customer:Customer){
    return this.http.put<Customer>(this.url+"/addMoney/"+amount,customer);
  }

    
  getPreviousBookings(customerId:number):Observable<Booking[]>
  {
    return this.http.get<Booking[]>(this.url+"/booking/all/"+customerId);
  }

  getAllShows():Observable<Show[]>
  {
return this.http.get<Show[]>(this.url+"/show/all");
  }
  getShowsByCityId(cityId:any):Observable<Show[]>
  {
    return this.http.get<Show[]>(this.url+"/show/all/cityId");
  }
}
