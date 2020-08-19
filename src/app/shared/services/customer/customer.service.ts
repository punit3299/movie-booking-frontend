import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../../models/ticket.model';
import { Transaction } from '../../models/transaction.model';
import { Customer } from '../../models/customer.model';

import { BookTicketDetails } from '../../models/book-ticket-details.model';
import { Observable } from 'rxjs';
import { BookedDetailsOfTicket } from '../../models/booked-details-of-ticket.model';

import { Credentials } from '../../models/credentials.model';


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

  bookedSeatArray(showId: number) {
    let url = "http://localhost:8083/customer/show/seats/" + showId;
    return this.http.get<number[]>(url);

  }

  bookTicket(ticketDetails: BookTicketDetails): Observable<any> {
    console.log("in angular service");
    console.log(ticketDetails);
    let url = "http://localhost:8083/customer/bookSeat/new";
    return this.http.post(url, ticketDetails);
  }

  showTicket(ticketDetail: BookedDetailsOfTicket) {

    this.ticketDetail = ticketDetail;
  }


  validateEmail(email:string){
    return this.http.get<boolean>(this.url+"/validateEmail/"+email);
  }

  validateContactNumber(number:number){
    return this.http.get<boolean>(this.url+"/validateContactNumber/"+number);
  }

  validateCredential(credentials:Credentials){
    return this.http.post(this.url+"/validateCredential",credentials,{ responseType: 'text' as 'json' });
  }

  saveCustomer(detail:any){
    this.customer=detail;

  }


}
