import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../../models/ticket.model';
import { Transaction } from '../../models/transaction.model';
import { Customer } from '../../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer:Customer;


  url: string = "http://localhost:8083/customer";
  constructor(private http:HttpClient) { }

  addCustomer(customer:any){
    return this.http.put<Customer>(this.url+"/addCustomer",customer);
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

  validateEmail(email:string){
    return this.http.get<boolean>(this.url+"/validateEmail/"+email);
  }

  validateContactNumber(number:number){
    return this.http.get<boolean>(this.url+"/validateContactNumber/"+number);
  }

  validateCredential(credential:Credential){
    return this.http.post<String>(this.url+"/validateCredential",credential);
  }

}
